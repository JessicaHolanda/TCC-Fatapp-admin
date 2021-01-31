import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterSpeakerValidatorService {

  speakerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  getSpeakerForm() {
    return this.createForm();
  }


  createForm() {
    return this.speakerForm = this.formBuilder.group({
      speakerName: [null, Validators.compose([Validators.required])],
      speakerEmail: [null, Validators.compose([Validators.required, Validators.email])],
      speakerPhone: [null, Validators.compose([Validators.required])],
      speakerPhone2: [null],
      speakerCurriculum: [null, Validators.compose([Validators.required])],
      speakerPicture: [null],
    });
  }

  validateAllFormFields() {
    Object.keys(this.speakerForm.controls).forEach(field => {
      this.speakerForm.get(field).markAsTouched({ onlySelf: true });
    });
  }

  getSpeakerFormValidationsMessages() {
    return {
      speakerName: [
        { type: 'required', message: 'Nome obrigatório' },
      ],
      speakerEmail: [
        { type: 'required', message: 'Email obrigatório' },
        { type: 'email', message: 'Endereço de email inválido' },
      ],
      speakerPhone: [
        { type: 'required', message: 'Número obrigatório' },
      ],
      speakerCurriculum: [
        { type: 'required', message: 'Currículo obrigatório' },
      ],
    };
  }
}
