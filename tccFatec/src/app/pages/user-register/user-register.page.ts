import { Component, OnInit } from '@angular/core';
import { UserRegisterValidatorService } from '../../services/validators/user-register-validator.service';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { GlobalsService } from 'src/app/services/globals.service';
import { UsersService } from 'src/app/services/firebase/users/users.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.page.html',
    styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

    public registerForm;
    public validationMessages;

    constructor(
        private userRegisterValidator: UserRegisterValidatorService,
        private loadingController: LoadingController,
        private navController: NavController,
        private usersService: UsersService,
    ) { }

    ngOnInit() {
        this.registerForm = this.userRegisterValidator.getRegistrationForm();
        this.validationMessages = this.userRegisterValidator.getRegistrationFormValidationsMessages();
    }


    async register() {
        if (!this.registerForm.valid) {
            this.userRegisterValidator.validateAllFormFields();
        } else {
            const loading = await this.loadingController.create({ message: 'Carregando...' });
            await loading.present();
            const registerResponse: any = await this.usersService.register(this.registerForm.value);
            await loading.dismiss();
            this.navController.back();
        }
    }

}
