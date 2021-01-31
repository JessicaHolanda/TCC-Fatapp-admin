import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddRoomValidatorService {

  formRoom: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) {
  }

  getFormRoom() {
    return this.createForm();
  }


  createForm() {
    return this.formRoom = this.formBuilder.group({
      number: [null, Validators.compose([Validators.required])],
      type: [null, Validators.compose([Validators.required])],
      capacity: [null, Validators.compose([Validators.required])],
    });
  }

  validateAllFormFields() {
    Object.keys(this.formRoom.controls).forEach(field => {
      this.formRoom.get(field).markAsTouched({onlySelf: true});
    });
  }

  getFormRoomValidationsMessages() {
    return {
      number: [
        {type: 'required', message: 'Número obrigatório'},
      ],
      type: [
        {type: 'required', message: 'Tipo obrigatório'},
      ],
      capacity: [
        {type: 'required', message: 'Capacidade obrigatória'},
      ],
    };
  }
}
