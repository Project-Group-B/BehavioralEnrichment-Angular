import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { ApprovedEntry } from '../shared/interfaces/approved-entry';
import { EnrichmentService } from '../shared/main/enrichment.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-master-approved',
  templateUrl: './master-approved.component.html',
  styleUrls: ['./master-approved.component.scss']
})
export class MasterApprovedComponent implements OnInit {
  constructor(private service: EnrichmentService) { }

  displayedColumns: string[] = ['enrichmentItem', 'behaviorsEncouraged',
  'dateApproved', 'safetyConcerns', 'exceptions', 'comments', 'species', 'category'];
  approvedEntries: ApprovedEntry[];
  dataSource: MatTableDataSource<ApprovedEntry>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getApprovedEntryFromDB();
    this.dataSource = new MatTableDataSource<ApprovedEntry>(this.approvedEntries);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getApprovedEntryFromDB() {
    this.service.getApprovedEntry().subscribe((data: ApprovedEntry[]) => {
      this.approvedEntries = data;
    }, (err: any) => {
        console.error('Error getting Approved Entries:', err);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // TODO: export master log to pdf, Excel, etc.; options:
  // https://stackoverflow.com/a/50398702
  // https://stackoverflow.com/a/52207189
  // https://stackoverflow.com/a/31536517
}



// Stand-in until can pull from database on back end
/*const ELEMENT_DATA: ApprovedEntry[] = [
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Snow', category: 'Environment', species: 'Penguins',
  behaviorsEncouraged: 'Toboganing', dateApproved: '23-Jan-19',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Beef Bone', category: 'Chow', species: 'Lions',
  behaviorsEncouraged: 'Chomping', dateApproved: '2-27-19',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
];*/
