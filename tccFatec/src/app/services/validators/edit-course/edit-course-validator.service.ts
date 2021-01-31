import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EditCourseValidatorService {
  editCourseForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getEditCourseForm() {
    return this.createForm();
  }


  createForm() {
    return this.editCourseForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      acronym: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.editCourseForm
      .controls).forEach(field => {
        this.editCourseForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getEditCourseFormValidationsMessages() {
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
