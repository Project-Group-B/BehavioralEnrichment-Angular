import { Component, OnInit, ViewChild, ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray} from '@angular/forms';
import { EnrichmentService } from '../shared/main/enrichment.service';
import { MatSnackBar, MatStepper, MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent,
  MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CompleteRequestForm } from '../shared/interfaces/complete-request-form';
import { StandardReturnObject } from '../shared/interfaces/standard-return-object';
import { CategoryInfo } from '../shared/interfaces/category-info';
import { SpeciesInfo } from '../shared/interfaces/species-info';
import { DepartmentInfo } from '../shared/interfaces/department-info';
import { UserInfo } from '../shared/interfaces/user-info';
import { CurrentUserService } from '../auth/user/current-user.service';
import { ItemInfo } from '../shared/interfaces/item-info';

interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  enrichmentRequestFormGroup: FormGroup;
  get requestForm(): AbstractControl | null { return this.enrichmentRequestFormGroup.get('requestForm'); }
  departments: DepartmentInfo[];
  species: SpeciesInfo[];
  submitter: UserInfo;
  items: ItemInfo[];

  // Category chips variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  private enrichmentFormControl: FormArray;
  public categories: string[] = [];
  // TODO: find a way to make this work with the category data from database
  public allCategories = ['Sensory', 'Feeding', 'Habitation', 'Social', 'Learning'];
  public filteredCategories: Observable<string[]>;
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private formBuilder: FormBuilder,
    private service: EnrichmentService,
    private snackbar: MatSnackBar,
    private currentUser: CurrentUserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.submitter = this.currentUser.getUser();
    this.initFormGroup();
    this.enrichmentFormControl = this.enrichmentRequestFormGroup.controls['requestForm'] as FormArray;
    this.filteredCategories = this.enrichmentFormControl.at(4).get('enrichmentCategory').valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));
    this.getDepartmentsFromDb();
    this.getCategoriesFromDb();
    this.getSpeciesFromDb();
    this.getItemsFromDb();
  }

  initFormGroup() {
    // TODO: enrichment animal id? - get from 'animal' table
    // TODO: enrichment location id? - get from 'location' table
    this.enrichmentRequestFormGroup = this.formBuilder.group({
      requestForm: this.formBuilder.array([
        this.formBuilder.group({
          department: new FormControl({departmentId: -1, departmentName: ''}, Validators.required), // Enrichment_Department
          species: new FormControl({speciesId: -1, speciesName: '', speciesDescription: '', speciesIsisNumber: -1}
            , Validators.required), // Enrichment_Species
          housed: new FormControl('', Validators.required),
          activityCycle: new FormControl('', Validators.required),
          age: new FormControl('', Validators.required)
        }),
        this.formBuilder.group({
          itemId: new FormControl(-1, Validators.required),
          enrichmentName: new FormControl('', [Validators.required, Validators.maxLength(50)]), // Enrichment_Name
          enrichmentDescription: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_Description
          enrichmentPresentation: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_PresentationMethod
          // time picker:
          enrichmentDayNightTime: new FormControl('', Validators.required), // TODO: Enrichment_TimeStart inputs
          enrichmentFrequency: new FormControl('', Validators.required) // Enrichment_Frequency: int
        }),
        this.formBuilder.group({
          lifeStrategiesWksht: new FormControl(null, Validators.required), // Enrichment_LifeStrategies: int (0: false, 1: true)
          anotherDeptZoo: new FormControl(null, Validators.required), // Enrichment_PreviousUse: int (0: false, 1: true)
          anotherDeptZooMoreInfo: new FormControl(null),
          safetyQuestion: new FormControl(null, Validators.required), // Enrichment_SafetyQuestions: int
          risksQuestion: new FormControl(null, Validators.required), // Enrichment_RisksHazards: int
          safetyComment: new FormControl('', Validators.maxLength(1000)) // Enrichment_Concerns
        }),
        this.formBuilder.group({
          naturalBehaviors: new FormControl('', [Validators.required, Validators.maxLength(1000)]) // Enrichment_ExpectedBehavior
        }),
        this.formBuilder.group({
          source: new FormControl('', [Validators.required, Validators.maxLength(50)]), // Enrichment_Source
          otherSource: new FormControl(null, Validators.maxLength(50)), // Enrichment_Source
          timeRequired: new FormControl('', Validators.required), // Enrichment_TimeRequired: int
          whoConstructs: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_Construction
          volunteerDocentUtilized: new FormControl(null, Validators.required), // Enrichment_Volunteers: int (0: false, 1: true)
          enrichmentCategory: new FormControl([''], Validators.required), // 'item/category' -> 'category'
          nameOfSubmitter: new FormControl({value: `${this.submitter.firstName} ${this.submitter.lastName}`, disabled: true},
            Validators.required), // Enrichment_Submittor
          dateOfSubmission: new FormControl({value: new Date(), disabled: true}, Validators.required) // Enrichment_DateSubmitted
        })
      ])
    });
  }

  submitForm(stepper: MatStepper) {
    console.log('form submitted:');
    console.log(this.toSingleObject(this.enrichmentRequestFormGroup.value));
    this.service.submitEnrichmentRequestForm(this.toSingleObject(this.enrichmentRequestFormGroup.value)).subscribe(
      (data: StandardReturnObject) => {
        if (!data.error) {
          this.snackbar.open(data.message, 'OK', {
            duration: 5000
          });
          stepper.reset();
        } else {
          // do NOT reset form
          this.snackbar.open(`ERROR: ${data.errorMsg}`, 'OK', {
            duration: 5000
          });
        }
    });
  }

  private toSingleObject(groupValue: any): CompleteRequestForm {
    const requestArray = groupValue.requestForm;
    const completeForm: CompleteRequestForm = {
      department: requestArray[0].department,
      species: requestArray[0].species,
      housed: requestArray[0].housed,
      activityCycle: requestArray[0].activityCycle,
      age: requestArray[0].age,

      itemId: requestArray[1].itemId,
      enrichmentName: requestArray[1].enrichmentName,
      enrichmentDayNightTime: requestArray[1].enrichmentDayNightTime,
      enrichmentDescription: requestArray[1].enrichmentDescription,
      enrichmentFrequency: requestArray[1].enrichmentFrequency,
      enrichmentPresentation: requestArray[1].enrichmentPresentation,

      anotherDeptZoo: requestArray[2].anotherDeptZoo,
      anotherDeptZooMoreInfo: requestArray[2].anotherDeptZooMoreInfo,
      lifeStrategiesWksht: requestArray[2].lifeStrategiesWksht,
      safetyComment: requestArray[2].safetyComment,
      safetyQuestion: requestArray[2].safetyQuestion,
      risksQuestion: requestArray[2].risksQuestion,

      naturalBehaviors: requestArray[3].naturalBehaviors,

      enrichmentCategory: this.categories,
      nameOfSubmitter: {name: requestArray[4].nameOfSubmitter, id: this.submitter.id},
      otherSource: requestArray[4].otherSource,
      source: requestArray[4].source,
      timeRequired: requestArray[4].timeRequired,
      volunteerDocentUtilized: requestArray[4].volunteerDocentUtilized,
      whoConstructs: requestArray[4].whoConstructs,
      dateOfSubmission: requestArray[4].dateOfSubmission
    };
    return completeForm;
  }

  private getDepartmentsFromDb() {
    this.service.getDepartments().subscribe((data: DepartmentInfo[]) => {
      this.departments = data;
    }, (err: any) => {
        console.error('Error getting departments:', err);
    });
  }

  private getCategoriesFromDb() {
    this.service.getCategories().subscribe((data: CategoryInfo[]) => {
      // this.allCategories = data;
    }, (err: any) => {
      console.error('Error getting categories:', err);
    });
  }

  private getSpeciesFromDb() {
    this.service.getSpecies().subscribe((data: SpeciesInfo[]) => {
      this.species = data;
    }, (err: any) => {
      console.error('Error getting species:', err);
    });
  }

  private getItemsFromDb() {
    this.service.getItems().subscribe((data: ItemInfo[]) => {
      this.items = data;
    }, (err: any) => {
      console.error('Error getting items:', err);
    });
  }

  getErrorMsg(index: number, formControlName: string): string {
    if (this.enrichmentFormControl.at(index).get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.enrichmentFormControl.at(index).get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else {
      return 'Invalid input.';
    }
  }

  add(event: MatChipInputEvent): void {
    // Add category only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our category
      if ((value || '').trim()) {
        this.categories.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.enrichmentFormControl.at(4).get('enrichmentCategory').setValue(null);
    }
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.enrichmentFormControl.at(4).get('enrichmentCategory').setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

  openNewItemDialog(): void {
    const dialogRef = this.dialog.open(InsertNewItemDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getItemsFromDb();
      }
    });
  }

}

@Component({
  selector: 'app-insert-new-item-dialog',
  templateUrl: './insert-new-item-dialog.html',
})
export class InsertNewItemDialogComponent {
  newItemForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    photo: new FormControl(null, Validators.required),
    comments: new FormControl('', [Validators.maxLength(1000)]),
    safetyNotes: new FormControl('', [Validators.maxLength(1000)]),
    exceptions: new FormControl('', [Validators.maxLength(1000)])
  });
  constructor(
    public dialogRef: MatDialogRef<InsertNewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private changeDetector: ChangeDetectorRef,
    private service: EnrichmentService,
    private snackbar: MatSnackBar) {}

  cancel(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    this.service.submitNewItem(this.newItemForm).subscribe((data: StandardReturnObject) => {
      this.snackbar.open(data.message || data.errorMsg, 'OK');
      if (!data.error) {
        this.dialogRef.close(true);
      }
    }, (err: any) => {
      console.error('error submitting item:');
      console.error(err);
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        /* this.newItemForm.patchValue({
          photo: reader.result
        }); */
        this.newItemForm.patchValue({
          photo: file.name
        });

        // need to run CD since file load runs outside of zone
        this.changeDetector.markForCheck();
      };
    }
  }

  getErrorMsg(formControlName: string): string {
    if (this.newItemForm.get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.newItemForm.get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else {
      return 'Invalid input.';
    }
  }
}
