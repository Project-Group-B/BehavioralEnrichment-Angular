import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { EnrichmentService } from '../shared/main/enrichment.service';
import {EnrichmentForm} from '../shared/interfaces/enrichment-form';


@Component({
  selector: 'app-request-form-status',
  templateUrl: './request-form-status.component.html',
  styleUrls: ['./request-form-status.component.scss']
})
export class RequestFormStatusComponent implements OnInit {
  constructor(private service: EnrichmentService) { }

  displayedColumns: string[] = ['Enrichment_IsApproved',
  /* 'Enrichment_DateSubmitted',
  'Enrichment_Name',
  'Submittor_User_Name',
  'Department_Name',
  'Item_Name',
  'Species_Name',
  'Animal_IsisNumber',
  'Enrichment_Description',
  'Location_Name',
  'Enrichment_PresentationMethod',
  'Enrichment_TimeStart',
  'Enrichment_TimeEnd',

  'Enrichment_Frequency',
  'Enrichment_LifeStrategies',
  'Enrichment_PreviousUse',
  'Enrichment_Contact',
  'Enrichment_SafetyQuestions',
  'Enrichment_RisksHazards',
  'Enrichment_Goal',
  'Enrichment_Source',
  'Enrichment_TimeRequired',
  'Enrichment_Construction',

  'Enrichment_Volunteers',
  'Enrichment_Inventory',
  'Enrichment_Concerns' */];
  enrichmentForms: EnrichmentForm[];
  dataSource: MatTableDataSource<EnrichmentForm>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getEnrichmentFormFromDB();
    // this.dataSource = new MatTableDataSource<EnrichmentForm>(this.enrichmentForms);
  }

  getEnrichmentFormFromDB() {
    this.service.getEnrichmentForm().subscribe((data: EnrichmentForm[]) => {
      this.dataSource = new MatTableDataSource(data);
      console.log('enrichment form approved items:');
      console.log(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (err: any) => {
        console.error('Error getting Enrichment Forms:', err);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


// Stand in sampling data until database ready
/*const REQUESTS: RequestInstance[] = [
  {requestID: 1, requestItem: 'Hydrogen', approved: true},
  {requestID: 2, requestItem: 'Helium',  approved: false},
  {requestID: 3, requestItem: 'Lithium', approved: true},
  {requestID: 4, requestItem: 'Beryllium', approved: false},
  {requestID: 5, requestItem: 'Boron',  approved: true},
  {requestID: 6, requestItem: 'Carbon', approved: true},
  {requestID: 7, requestItem: 'Nitrogen', approved: true},
  {requestID: 8, requestItem: 'Oxygen', approved: false},
  {requestID: 9, requestItem: 'Fluorine', approved: true},
  {requestID: 10, requestItem: 'Neon', approved: true},
  {requestID: 11, requestItem: 'Sodium',  approved: true},
  {requestID: 12, requestItem: 'Magnesium', approved: false},
  {requestID: 13, requestItem: 'Aluminum', approved: false},
  {requestID: 14, requestItem: 'Silicon', approved: false},
  {requestID: 15, requestItem: 'Phosphorus', approved: false},
  {requestID: 16, requestItem: 'Sulfur', approved: false},
  {requestID: 17, requestItem: 'Chlorine', approved: false},
  {requestID: 18, requestItem: 'Argon',  approved: true},
  {requestID: 19, requestItem: 'Potassium', approved: false},
  {requestID: 20, requestItem: 'Calcium',  approved: true},
];*/
