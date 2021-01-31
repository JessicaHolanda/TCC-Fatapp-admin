import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedPage } from './certified.page';

describe('CertifiedPage', () => {
  let component: CertifiedPage;
  let fixture: ComponentFixture<CertifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifiedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
