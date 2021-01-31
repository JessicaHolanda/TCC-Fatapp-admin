import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAccessPerfilModalComponent } from './change-access-perfil-modal.component';

describe('ChangeAccessPerfilModalComponent', () => {
  let component: ChangeAccessPerfilModalComponent;
  let fixture: ComponentFixture<ChangeAccessPerfilModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAccessPerfilModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAccessPerfilModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
