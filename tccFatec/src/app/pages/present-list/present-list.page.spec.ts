import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentListPage } from './present-list.page';

describe('PresentListPage', () => {
  let component: PresentListPage;
  let fixture: ComponentFixture<PresentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
