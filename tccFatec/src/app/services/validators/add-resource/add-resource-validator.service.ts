import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddResourceValidatorService {

  addResourceForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getAddResourceForm() {
    return this.createForm();
  }


  createForm() {
    return this.addResourceForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      resource_amount: [null, Validators.compose([Validators.required])]
    });
  }

  validateAllFormFields() {
    Object.keys(this.addResourceForm
      .controls).forEach(field => {
        this.addResourceForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getAddResourceFormValidationsMessages() {
    return {
      resource_amount: [
        { type: 'required', message: 'Quantidade é obrigatória' },
      ],
      name: [
        { type: 'required', message: 'Selecione o recurso' },
      ],
    };
  }
}
