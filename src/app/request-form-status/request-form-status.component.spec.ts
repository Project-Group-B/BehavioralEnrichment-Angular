import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFormStatusComponent } from './request-form-status.component';

describe('RequestFormStatusComponent', () => {
  let component: RequestFormStatusComponent;
  let fixture: ComponentFixture<RequestFormStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFormStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFormStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
