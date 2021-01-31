import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoursePage } from './register-course.page';

describe('RegisterCoursePage', () => {
  let component: RegisterCoursePage;
  let fixture: ComponentFixture<RegisterCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
