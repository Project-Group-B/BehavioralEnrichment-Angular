import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray} from '@angular/forms';
import { EnrichmentService, StandardReturnObject } from '../shared/main/enrichment.service';
import { MatSnackBar, MatStepper, MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CompleteRequestForm } from '../shared/interfaces/complete-request-form';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  enrichmentRequestFormGroup: FormGroup;
  get requestForm(): AbstractControl | null { return this.enrichmentRequestFormGroup.get('requestForm'); }
  departments: DepartmentInfo[];

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
  constructor(private formBuilder: FormBuilder, private service: EnrichmentService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.initFormGroup();
    this.enrichmentFormControl = this.enrichmentRequestFormGroup.controls['requestForm'] as FormArray;
    this.filteredCategories = this.enrichmentFormControl.at(4).get('enrichmentCategory').valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));
    this.getDepartmentsFromDb();
    this.getCategoriesFromDb();
  }

  initFormGroup() {
    // TODO: enrichment item id? - get from 'item' table
    // TODO: enrichment animal id? - get from 'animal' table
    // TODO: enrichment location id? - get from 'location' table
    this.enrichmentRequestFormGroup = this.formBuilder.group({
      requestForm: this.formBuilder.array([
        this.formBuilder.group({
          department: new FormControl({departmentId: -1, departmentName: ''}, Validators.required), // Enrichment_Department
          species: new FormControl('', Validators.required), // TODO: get id from 'species' table; Enrichment_Species
          housed: new FormControl('', Validators.required),
          activityCycle: new FormControl('', Validators.required),
          age: new FormControl('', Validators.required)
        }),
        this.formBuilder.group({
          enrichmentName: new FormControl('', [Validators.required, Validators.maxLength(50)]), // Enrichment_Name
          enrichmentDescription: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_Description
          enrichmentPresentation: new FormControl('', [Validators.required, Validators.maxLength(1000)]), // Enrichment_PresentationMethod
          // time picker: https://www.npmjs.com/package/ngx-material-timepicker
          enrichmentDayNightTime: new FormControl('', Validators.required), // TODO: Enrichment_TimeStart & Enrichment_TimeEnd inputs
          enrichmentFrequency: new FormControl('', Validators.required) // Enrichment_Frequency: int
          // TODO: add image input/upload capability
          // enrichmentPhoto: new FormControl(null)
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
          nameOfSubmitter: new FormControl('', Validators.required), // TODO: get 'id' from current signed in user; Enrichment_Submittor
          dateOfSubmission: new FormControl(new Date(), Validators.required) // Enrichment_DateSubmitted
        })
      ])
    });
  }

  submitForm(stepper: MatStepper) {
    // TODO: submit image options:
    // https://stackoverflow.com/questions/1665730/images-in-mysql
    // https://stackoverflow.com/questions/3014578/storing-images-in-mysql
    // https://stackoverflow.com/questions/6472233/can-i-store-images-in-mysql
    // https://www.quora.com/What-is-the-best-way-to-store-100-images-in-a-MySQL-database-in-this-case
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
      nameOfSubmitter: requestArray[4].nameOfSubmitter,
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
    this.service.getCategories().subscribe((data: CategoryInfo) => {
      console.log('data from categories:');
      console.log(data);
      // this.allCategories = data;
    }, (err: any) => {
      console.error('Error getting categories:', err);
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

}
