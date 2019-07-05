import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailsCarPage } from './rental-details-car.page';

describe('RentalDetailsCarPage', () => {
  let component: RentalDetailsCarPage;
  let fixture: ComponentFixture<RentalDetailsCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetailsCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailsCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
