import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventsPage } from './search-events.page';

describe('SearchEventsPage', () => {
  let component: SearchEventsPage;
  let fixture: ComponentFixture<SearchEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
