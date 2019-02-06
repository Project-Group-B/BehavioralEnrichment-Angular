import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterApprovedComponent } from './master-approved.component';

describe('MasterApprovedComponent', () => {
  let component: MasterApprovedComponent;
  let fixture: ComponentFixture<MasterApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
