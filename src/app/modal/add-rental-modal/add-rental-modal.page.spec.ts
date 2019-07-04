import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentalModalPage } from './add-rental-modal.page';

describe('AddRentalModalPage', () => {
  let component: AddRentalModalPage;
  let fixture: ComponentFixture<AddRentalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentalModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
