import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordValidatorService {

  forgotPasswordForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getPasswordForm() {
    return this.createForm();
  }


  createForm() {
    return this.forgotPasswordForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.forgotPasswordForm
      .controls).forEach(field => {
        this.forgotPasswordForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getPasswordFormValidationsMessages() {
    return {
      email: [
        { type: 'required', message: 'Email obrigatório' },
        { type: 'email', message: 'Endereço de email inválido' },
      ],
    };
  }
}
