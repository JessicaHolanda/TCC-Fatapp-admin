import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlPage } from './access-control.page';

describe('AccessControlPage', () => {
  let component: AccessControlPage;
  let fixture: ComponentFixture<AccessControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessControlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
