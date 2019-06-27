import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientModalPage } from './add-client-modal.page';

describe('AddClientModalPage', () => {
  let component: AddClientModalPage;
  let fixture: ComponentFixture<AddClientModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
