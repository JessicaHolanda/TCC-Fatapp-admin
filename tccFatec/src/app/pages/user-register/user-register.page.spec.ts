import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterPage } from './user-register.page';

describe('UserRegisterPage', () => {
  let component: UserRegisterPage;
  let fixture: ComponentFixture<UserRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
