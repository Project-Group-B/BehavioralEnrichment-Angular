import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportStatusComponent } from './incident-report-status.component';

describe('IncidentReportStatusComponent', () => {
  let component: IncidentReportStatusComponent;
  let fixture: ComponentFixture<IncidentReportStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentReportStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentReportStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
