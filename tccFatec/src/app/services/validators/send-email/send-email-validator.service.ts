import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SendEmailValidatorService {
  sendEmailForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getSendEmailForm() {
    return this.createForm();
  }


  createForm() {
    return this.sendEmailForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.sendEmailForm
      .controls).forEach(field => {
        this.sendEmailForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getSendEmailFormValidationsMessages() {
    return {
      email: [
        {type: 'required', message: 'Email obrigatório'},
        {type: 'email', message: 'Endereço de email inválido'},
    ]
    };
  }
}
