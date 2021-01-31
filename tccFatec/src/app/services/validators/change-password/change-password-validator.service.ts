import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordValidatorService {

  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  getChangePasswordForm() {
    return this.createForm();
  }


  createForm() {
    return this.changePasswordForm = this.formBuilder.group({
      new_password: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.changePasswordForm.controls).forEach(field => {
      this.changePasswordForm.get(field).markAsTouched({ onlySelf: true });
    });
  }

  getChangePasswordValidationsMessages() {
    return {
      new_password: [
        { type: 'required', message: 'Insira a nova senha' },
      ],
    };
  }
}

