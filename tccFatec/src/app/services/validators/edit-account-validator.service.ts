import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class EditAccountValidatorService {
    accountForm: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
    ) {
    }

    getAccountForm() {
        return this.createForm();
    }

    createForm() {
        return this.accountForm = this.formBuilder.group({
            name: [null, Validators.compose([Validators.required])],
            last_name: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            cpf: [null, Validators.compose([Validators.required])],
        });
    }

    validateAllFormFields() {
        Object.keys(this.accountForm.controls).forEach(field => {
            this.accountForm.get(field).markAsTouched({onlySelf: true});
        });
    }

    getValidationsMessages() {
        return {
            name: [
                {type: 'required', message: 'Nome obrigatório'},
            ],
            last_name: [
                {type: 'required', message: 'Sobrenome obrigatório'},
            ],
            cpf: [
                {type: 'required', message: 'CPF obrigatório'},
            ],
            email: [
                {type: 'required', message: 'Email obrigatório'},
                {type: 'email', message: 'Endereço de email inválido'},
            ]
        };
    }
}
