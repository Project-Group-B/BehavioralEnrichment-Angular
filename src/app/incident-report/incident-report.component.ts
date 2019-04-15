import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray} from '@angular/forms';
import { IncidentService, StandardReturnObject } from '../shared/main/incident.service';
import { MatSnackBar, MatStepper, MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IncidentReportForm } from '../shared/interfaces/incident-report-form';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})

export class IncidentReportComponent implements OnInit {
  incidentReportFormGroup: FormGroup;
  get incidentReport(): AbstractControl | null { return this.incidentReportFormGroup.get('incidentReport'); }

  // Category chips variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  private incidentFormControl: FormArray;
  public categories: string[] = [];
  public allCategories = ['Sensory', 'Feeding', 'Habitation', 'Social', 'Learning'];
  public filteredCategories: Observable<string[]>;
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private formBuilder: FormBuilder, private service: IncidentService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.initFormGroup();
    this.incidentFormControl = this.incidentReportFormGroup.controls['incidentReport'] as FormArray;

  }

  initFormGroup() {
    this.incidentReportFormGroup = this.formBuilder.group({
      incidentReport: this.formBuilder.array([
        this.formBuilder.group({
          incDepartment: new FormControl('', Validators.required),
          dateOfIncident: new FormControl('', Validators.required),
          locationOfIncident: new FormControl('', Validators.required),
          animalsIncident: new FormControl('', Validators.required),

        }),
        this.formBuilder.group({
          enrichmentInvolved: new FormControl('', Validators.required),
          novelYN: new FormControl(''),
          enrichDescription: new FormControl('', Validators.required),

        }),

        this.formBuilder.group({
          bestDescribes: new FormControl('', Validators.required),
          incDescription: new FormControl('', Validators.required),
          actionsTaken: new FormControl('', Validators.required),
          incName: new FormControl('', Validators.required),
          dateOfSubmission: new FormControl('', Validators.required),

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
    console.log('incident form submitted:');
    console.log(this.toSingleObject(this.incidentReportFormGroup.value));
    this.service.submitIncidentReportForm(this.toSingleObject(this.incidentReportFormGroup.value)).subscribe(
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

  toSingleObject(groupValue: any): IncidentReportForm {
    const requestArray = groupValue.incidentReport;
    const completeForm: IncidentReportForm = {
      department: requestArray[0].department,
      dateOfIncident: requestArray[0].dateOfIncident,
      locationOfIncident: requestArray[0].locationOfIncident,
      animalsIncident: requestArray[0].locationOfIncident,

      enrichmentInvolved: requestArray[1].enrichmentInvolved,
      novelYN: requestArray[1].novelYN,  
      enrichDescription: requestArray[1].enrichDescription,   

      bestDescribes: requestArray[2].bestDescribes,
      incDescription: requestArray[2].incDescription,
      actionsTaken: requestArray[2].actionsTaken,
      incName: requestArray[2].incName,
      dateOfSubmission: requestArray[2].dateOfSubmission,
    
    };
    return completeForm;
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

      this.incidentFormControl.at(4).get('enrichmentCategory').setValue(null);
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
    this.incidentFormControl.at(4).get('enrichmentCategory').setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

}