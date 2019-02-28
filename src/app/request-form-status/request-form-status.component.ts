import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-request-form-status',
  templateUrl: './request-form-status.component.html',
  styleUrls: ['./request-form-status.component.scss']
})
export class RequestFormStatusComponent implements OnInit {

  displayedColumns: string[] = ['requestID', 'requestItem', 'approved'];
  dataSource = new MatTableDataSource<RequestInstance>(REQUESTS);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/* Abstraction of Request Forms */
export interface RequestInstance {
  requestItem: string;
  requestID: number;
  approved: boolean;
}

// Stand in sampling data until database ready
const REQUESTS: RequestInstance[] = [
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
];
