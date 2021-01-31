import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModalComponent } from './account-modal.component';

describe('AccountModalComponent', () => {
  let component: AccountModalComponent;
  let fixture: ComponentFixture<AccountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
