import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarOfEventsPage } from './calendar-of-events.page';

describe('CalendarOfEventsPage', () => {
  let component: CalendarOfEventsPage;
  let fixture: ComponentFixture<CalendarOfEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarOfEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarOfEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
