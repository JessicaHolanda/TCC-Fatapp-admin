import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterResourceValidatorService {

  registerResourceForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getRegisterResourceForm() {
    return this.createForm();
  }


  createForm() {
    return this.registerResourceForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.registerResourceForm
      .controls).forEach(field => {
        this.registerResourceForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getRegisterResourceFormValidationsMessages() {
    return {
      name: [
        { type: 'required', message: 'Nome é obrigatório' },
      ],
    };
  }
}
