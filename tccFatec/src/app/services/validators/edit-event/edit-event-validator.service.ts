import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EditEventValidatorService {
  formEvent: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) {
  }

  getFormEvent() {
    return this.createForm();
  }


  createForm() {
    return this.formEvent = this.formBuilder.group({
      title: [null, Validators.compose([Validators.required])],
      edition: [null, Validators.compose([Validators.required])],
      initialDate: [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      finalDate: [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      banner: [null, Validators.compose([Validators.required])],
      certified: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.formEvent.controls).forEach(field => {
      this.formEvent.get(field).markAsTouched({onlySelf: true});
    });
  }

  getFormEventValidationsMessages() {
    return {
      title: [
        {type: 'required', message: 'Título obrigatório'},
      ],
      edition: [
        {type: 'required', message: 'Edição obrigatória'},
      ],
      initialDate: [
        {type: 'required', message: 'Data obrigatória'},
        {type: 'minlength', message: 'Digite a data e a hora. Exemplo: dd/mm/yyyy-HH:mm'},
        {type: 'maxlength', message: 'Digite a data e a hora. Exemplo: dd/mm/yyyy-HH:mm'},
      ],
      finalDate: [
        {type: 'required', message: 'Data obrigatória'},
        {type: 'minlength', message: 'Digite a data e a hora. Exemplo: dd/mm/yyyy-HH:mm'},
        {type: 'maxlength', message: 'Digite a data e a hora. Exemplo: dd/mm/yyyy-HH:mm'},
      ],
      banner: [
        {type: 'required', message: 'Imagem obrigatória'},
      ],
      certified: [
        {type: 'required', message: 'Escolha um certificado referente ao evento'},
      ],
      description: [
        {type: 'required', message: 'Descrição obrigatória'},
      ],
    };
  }
}

