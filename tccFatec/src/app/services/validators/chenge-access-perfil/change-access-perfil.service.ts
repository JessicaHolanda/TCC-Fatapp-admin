import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChangeAccessPerfilService {
  changeAccessPerfilForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) {
  }

  getChangeAccessPerfilForm() {
    return this.createForm();
  }


  createForm() {
    return this.changeAccessPerfilForm = this.formBuilder.group({
      user_type: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.changeAccessPerfilForm.controls).forEach(field => {
      this.changeAccessPerfilForm.get(field).markAsTouched({onlySelf: true});
    });
  }

  getChangeAccessPerfilValidationsMessages() {
    return {
      user_type: [
        {type: 'required', message: 'Escolha o tipo de usuário'},
      ],
    };
  }
}
