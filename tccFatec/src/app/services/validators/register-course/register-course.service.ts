import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseValidatorService {

  registerCourseForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getRegisterCourseForm() {
    return this.createForm();
  }


  createForm() {
    return this.registerCourseForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      acronym: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.registerCourseForm
      .controls).forEach(field => {
        this.registerCourseForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getRegisterCourseFormValidationsMessages() {
    return {
      name: [
        { type: 'required', message: 'Público alvo é obrigatório' },
      ],
      acronym: [
        { type: 'required', message: 'Sigla obrigatória' },
      ],
    };
  }
}
