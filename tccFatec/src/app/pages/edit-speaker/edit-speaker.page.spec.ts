import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpeakerPage } from './edit-speaker.page';

describe('EditSpeakerPage', () => {
  let component: EditSpeakerPage;
  let fixture: ComponentFixture<EditSpeakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpeakerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpeakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
