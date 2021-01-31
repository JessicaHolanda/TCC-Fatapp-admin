import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CertifiedValidatorService {

  certifiedForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getCertifiedForm() {
    return this.createForm();
  }


  createForm() {
    return this.certifiedForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      certified: [null, Validators.compose([Validators.required])]
    });
  }

  validateAllFormFields() {
    Object.keys(this.certifiedForm
      .controls).forEach(field => {
        this.certifiedForm
          .get(field).markAsTouched({ onlySelf: true });
      });
  }

  getCertifiedFormFormValidationsMessages() {
    return {
      name: [
        { type: 'required', message: 'Nome do certificado obrigatório' },
      ],
      certified: [
        { type: 'required', message: 'Insira o certificado' },
      ],
    };
  }
}
