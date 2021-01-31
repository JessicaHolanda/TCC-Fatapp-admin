import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/firebase/users/users.service';
import { ModalController } from '@ionic/angular';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {

    public loginForm: FormGroup;

    constructor(
        private usersService: UsersService,
        private formBuilder: FormBuilder,
        private modalController: ModalController,
    ) {
        this.createForm();
    }

    private createForm() {
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control(''),
            password: this.formBuilder.control(''),
        });
    }

    async submit() {
        const data = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value,
        };

        this.usersService.login(data);
    }

    async forgotPassword() {
        await this.modalController.dismiss();

        const modal = await this.modalController.create({
            component: ForgotPasswordComponent,
        });
        await modal.present();

    }
}
