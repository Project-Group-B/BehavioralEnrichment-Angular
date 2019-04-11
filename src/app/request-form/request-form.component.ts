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
import { AnimalInfo } from '../shared/interfaces/animal-info';
import { LocationInfo } from '../shared/interfaces/location-info';

interface DialogData {
  species: SpeciesInfo[];
  locations: LocationInfo[];
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
  animals: AnimalInfo[];
  locations: LocationInfo[];

  // Numbers only regex
  private readonly numberRegex = '^[0-9]*$';

  // Category chips variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  private enrichmentFormControl: FormArray;
  public categories: string[] = [];
  public allCategoryNames: string[];
  public filteredCategories: Observable<string[]>;
  public allCategories: CategoryInfo[];
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
    this.getDepartmentsFromDb();
    this.getCategoriesFromDb();
    this.getSpeciesFromDb();
    this.getItemsFromDb();
    this.getAnimalsFromDb();
    this.getLocationsFromDb();
  }

  initFormGroup() {
    this.enrichmentRequestFormGroup = this.formBuilder.group({
      requestForm: this.formBuilder.array([
        this.formBuilder.group({
          department: new FormControl(null, Validators.required), // Enrichment_Department
          species: new FormControl(null, Validators.required), // Enrichment_Species
          animal: new FormControl(null, [Validators.required]) // Enrichment_Animal
        }),
        this.formBuilder.group({
          itemId: new FormControl(null, Validators.required), // Foreign Key: 'item' table
          enrichmentName: new FormControl('', [Validators.required, Validators.maxLength(50)]), // Enrichment_Name
          enrichmentDescription: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_Description
          enrichmentLocation: new FormControl(null, [Validators.required]),
          enrichmentPresentationMethod: new FormControl('', [Validators.required,
            Validators.maxLength(1000)]), // Enrichment_PresentationMethod
          enrichmentDayNightTime: new FormControl('', Validators.required), // Enrichment_TimeStart & Enrichment_TimeEnd
          enrichmentFrequency: new FormControl(null, [Validators.required,
            Validators.pattern(this.numberRegex)]) // Enrichment_Frequency: int
        }),
        this.formBuilder.group({
          lifeStrategiesWksht: new FormControl(null, Validators.required), // Enrichment_LifeStrategies: int (0: false, 1: true)
          anotherDeptZoo: new FormControl(null, Validators.required), // Enrichment_PreviousUse: int (0: false, 1: true)
          anotherDeptZooMoreInfo: new FormControl(null), // Enrichment_Contact: int (0: false, 1: true), can be null
          safetyQuestion: new FormControl(null, Validators.required), // Enrichment_SafetyQuestions: int
          risksQuestion: new FormControl(null, Validators.required), // Enrichment_RisksHazards: int
          safetyComment: new FormControl('', Validators.maxLength(1000)) // Enrichment_Concerns
        }),
        this.formBuilder.group({
          naturalBehaviors: new FormControl('', [Validators.required, Validators.maxLength(1000)]) // Enrichment_Goal
        }),
        this.formBuilder.group({
          source: new FormControl('', [Validators.required, Validators.maxLength(50)]), // Enrichment_Source
          otherSource: new FormControl(null, Validators.maxLength(50)), // Enrichment_Source
          timeRequired: new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]), // Enrichment_TimeRequired: int
          whoConstructs: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_Construction
          volunteerDocentUtilized: new FormControl(null, Validators.required), // Enrichment_Volunteers: int (0: false, 1: true)
          enrichmentCategory: new FormControl([''], Validators.required), // Enrichment_Inventory: 'item/category' -> 'category'
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
      animalId: requestArray[0].animal,

      itemId: requestArray[1].itemId,
      enrichmentName: requestArray[1].enrichmentName,
      enrichmentDescription: requestArray[1].enrichmentDescription,
      enrichmentLocation: requestArray[1].enrichmentLocation,
      enrichmentPresentationMethod: requestArray[1].enrichmentPresentationMethod,
      enrichmentDayNightTime: requestArray[1].enrichmentDayNightTime,
      enrichmentFrequency: requestArray[1].enrichmentFrequency,

      lifeStrategiesWksht: requestArray[2].lifeStrategiesWksht,
      anotherDeptZoo: requestArray[2].anotherDeptZoo,
      anotherDeptZooMoreInfo: requestArray[2].anotherDeptZooMoreInfo,
      safetyQuestion: requestArray[2].safetyQuestion,
      risksQuestion: requestArray[2].risksQuestion,
      safetyComment: requestArray[2].safetyComment,

      naturalBehaviors: requestArray[3].naturalBehaviors,

      source: requestArray[4].source,
      otherSource: requestArray[4].otherSource,
      timeRequired: requestArray[4].timeRequired,
      whoConstructs: requestArray[4].whoConstructs,
      volunteerDocentUtilized: requestArray[4].volunteerDocentUtilized,
      enrichmentCategory: this.categories.join(','),
      nameOfSubmitter: {
        name: `${this.submitter.firstName} ${this.submitter.lastName}`,
        id: this.submitter.id,
        username: `${this.submitter.username}`
      },
      dateOfSubmission: new Date()
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
      this.allCategories = data;
      this.allCategoryNames = data.map(cat => cat.categoryName);
      this.filteredCategories = this.enrichmentFormControl.at(4).get('enrichmentCategory').valueChanges.pipe(
        startWith(null),
        map((category: string | null) => category ? this._filter(category) : this.allCategoryNames.slice()));
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

  private getAnimalsFromDb() {
    this.service.getAnimals().subscribe((data: AnimalInfo[]) => {
      this.animals = data;
    }, (err: any) => {
      console.error('Error getting animals:', err);
    });
  }

  private getLocationsFromDb() {
    this.service.getLocations().subscribe((data: LocationInfo[]) => {
      this.locations = data;
    }, (err: any) => {
      console.error('Error getting locations:', err);
    });
  }

  getErrorMsg(index: number, formControlName: string): string {
    if (this.enrichmentFormControl.at(index).get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.enrichmentFormControl.at(index).get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else if (this.enrichmentFormControl.at(index).get(formControlName).hasError('pattern')) {
      return 'Input must be a number';
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

      this.enrichmentFormControl.at(4).get('enrichmentCategory').setValue(['']);
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
    const filterValue = value == null ? '' : value.toLowerCase();

    return this.allCategoryNames.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

  openNewItemDialog(): void {
    const itemDialogRef = this.dialog.open(InsertNewItemDialogComponent);

    itemDialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getItemsFromDb();
      }
    });
  }

  openNewAnimalDialog(): void {
    const animalDialogRef = this.dialog.open(InsertNewAnimalDialogComponent, {
      data: {species: this.species, locations: this.locations}
    });

    animalDialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getAnimalsFromDb();
      }
    });
  }

}

@Component({
  selector: 'app-insert-new-animal-dialog',
  templateUrl: './insert-new-animal-dialog.html',
})
export class InsertNewAnimalDialogComponent {
  newAnimalForm = new FormGroup({
    isisNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    species: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    housed: new FormControl('', Validators.required),
    activityCycle: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  });
  constructor(
    public dialogRef: MatDialogRef<InsertNewAnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: EnrichmentService,
    private snackbar: MatSnackBar) {}

  cancel() {
    this.dialogRef.close(false);
  }

  submitNewAnimalForm() {
    return null;
  }

  getErrorMsg(formControlName: string): string {
    if (this.newAnimalForm.get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.newAnimalForm.get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else if (this.newAnimalForm.get(formControlName).hasError('pattern')) {
      return 'Input must be a number.';
    } else {
      return 'Invalid input.';
    }
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
