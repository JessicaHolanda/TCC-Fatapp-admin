import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { User } from '../../../interfaces/user-interface';
import { EditAccountValidatorService } from '../../../services/validators/edit-account-validator.service';
import { GlobalsService } from '../../../services/globals.service';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { UsersService } from 'src/app/services/firebase/users/users.service';


@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss'],
})
export class AccountModalComponent implements OnInit {

  public user: User;
  accountForm;
  validationMessages;

  constructor(
    private usersService: UsersService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private editAccountValidator: EditAccountValidatorService,
    private global: GlobalsService,
  ) {
  }

  ngOnInit() {
    this.accountForm = this.editAccountValidator.getAccountForm();
    this.validationMessages = this.editAccountValidator.getValidationsMessages();
    this.initialize();
  }

  async initialize() {
    this.usersService.user.subscribe(data => {
      this.user = data;
    });

  }

  async updateUserData() {
    if (!this.accountForm.valid) {
      this.editAccountValidator.validateAllFormFields();
      this.global.createAlert('Por favor, preencha todos os campos obrigatórios...');
    } else {
      const loading = await this.loadingController.create({message: 'Carregando...'});
      await loading.present();
      const updateResponse = await this.usersService.updateUser(this.accountForm.value);
      await loading.dismiss();
    }
  }

  async closeModal() {
    await this.modalController.dismiss().then(() => {

    }).catch(error => {
      console.log(error);
    });
  }

  async goToChangePassword() {
    const modal = await this.modalController.create({
      component: ChangePasswordModalComponent,
    });
    modal.present();
  }
}
