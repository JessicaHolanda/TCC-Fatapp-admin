import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStudentPage } from './activity-student.page';

describe('ActivityStudentPage', () => {
  let component: ActivityStudentPage;
  let fixture: ComponentFixture<ActivityStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
