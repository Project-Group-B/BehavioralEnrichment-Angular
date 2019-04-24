import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatTable} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {incidentStatus} from '../shared/interfaces/incident-status';
import { DataSource } from '@angular/cdk/table';
import { EnrichmentService } from '../shared/main/enrichment.service';

export interface IncidentInstance {
  incidentID: number;
  incDate: string;
  department: string;
  futureUse: string;
  enrichItem: string;
  futureUseUpdate: string;
}

@Component({
  selector: 'app-incident-report-status',
  templateUrl: './incident-report-status.component.html',
  styleUrls: ['./incident-report-status.component.scss'],
})

export class IncidentReportStatusComponent implements OnInit {
  constructor(private service: EnrichmentService) { }

  displayedColumns: string[] = ['incidentID', 'incDate', 'enrichItem','department', 'futureUse', 'futureUseUpdate'];
  //dataSource = new MatTableDataSource<IncidentInstance>(INCIDENTS);

  incidentStatusReports: incidentStatus[];
  dataSource: MatTableDataSource<incidentStatus>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.getIncidentReportFromDB();
    this.dataSource= new MatTableDataSource<incidentStatus>(this.incidentStatusReports)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getIncidentReportFromDB() {
    this.service.getIncidentReport().subscribe((data: incidentStatus[]) => {
      this.incidentStatusReports = data;
    }, (err: any) => {
        console.error('Error :', err);
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
/*const INCIDENTS: IncidentInstance[] = [
  {incidentID: 1, incDate: '12 Apr 19', enrichItem: 'Feather', department: 'Birds', futureUse: "Do not use", futureUseUpdate: "update"},
  {incidentID: 2, incDate: '13 Apr 19', enrichItem: 'Log', department: 'Lizards', futureUse: "Do not use", futureUseUpdate: "update"},
  {incidentID: 3, incDate: '13 Feb 19', enrichItem: 'Ball', department: 'Monkeys', futureUse: "Pending", futureUseUpdate: "update"},
];*/





