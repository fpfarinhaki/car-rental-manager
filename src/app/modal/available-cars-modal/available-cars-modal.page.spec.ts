import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCarsModalPage } from './available-cars-modal.page';

describe('AvailableCarsModalPage', () => {
  let component: AvailableCarsModalPage;
  let fixture: ComponentFixture<AvailableCarsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCarsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCarsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
