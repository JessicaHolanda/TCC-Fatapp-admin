import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpeakerPage } from './register-speaker.page';

describe('RegisterSpeakerPage', () => {
  let component: RegisterSpeakerPage;
  let fixture: ComponentFixture<RegisterSpeakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSpeakerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSpeakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
