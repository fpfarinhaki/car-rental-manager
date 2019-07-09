import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailsInsuranceExtrasPage } from './rental-details-insurance-extras.page';

describe('RentalDetailsInsuranceExtrasPage', () => {
  let component: RentalDetailsInsuranceExtrasPage;
  let fixture: ComponentFixture<RentalDetailsInsuranceExtrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetailsInsuranceExtrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailsInsuranceExtrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
