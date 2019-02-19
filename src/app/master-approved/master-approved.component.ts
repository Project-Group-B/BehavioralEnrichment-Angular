import { Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';

export interface ApprovedEntry {
  enrichmentItem: string;
  category: string;
  species: string;
  behaviorsEncouraged: string;
  dateApproved: string;
  comments: string;
  safetyConcerns: string;
  reports: string;
}

// Stand-in until can pull from database on back end
const ELEMENT_DATA: ApprovedEntry[] = [
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
];

@Component({
  selector: 'app-master-approved',
  templateUrl: './master-approved.component.html',
  styleUrls: ['./master-approved.component.scss']
})

export class MasterApprovedComponent implements OnInit {
  displayedColumns: string[] = ['enrichmentItem', 'category',
  'species', 'behaviorsEncouraged', 'dateApproved', 'comments', 'safetyConcerns', 'reports'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // TODO: export master log to pdf, Excel, etc.; options:
  // https://stackoverflow.com/a/50398702
  // https://stackoverflow.com/a/52207189
  // https://stackoverflow.com/a/31536517

  //pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }



  ngOnInit() {
  }

}
