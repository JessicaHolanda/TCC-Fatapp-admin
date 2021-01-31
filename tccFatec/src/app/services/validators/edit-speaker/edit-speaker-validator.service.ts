import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EditSpeakerValidatorService {

  editSpeakerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  getEditSpeakerForm() {
    return this.createForm();
  }


  createForm() {
    return this.editSpeakerForm = this.formBuilder.group({
      speakerName: [null, Validators.compose([Validators.required])],
      speakerEmail: [null, Validators.compose([Validators.required, Validators.email])],
      speakerPhone: [null, Validators.compose([Validators.required])],
      speakerPhone2: [null],
      speakerCurriculum: [null, Validators.compose([Validators.required])],
      speakerPicture: [null],
    });
  }

  validateAllFormFields() {
    Object.keys(this.editSpeakerForm.controls).forEach(field => {
      this.editSpeakerForm.get(field).markAsTouched({ onlySelf: true });
    });
  }

  getEditSpeakerFormValidationsMessages() {
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
