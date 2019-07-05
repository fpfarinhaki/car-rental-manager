import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailsPaymentPage } from './rental-details-payment.page';

describe('RentalDetailsPaymentPage', () => {
  let component: RentalDetailsPaymentPage;
  let fixture: ComponentFixture<RentalDetailsPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetailsPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailsPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
