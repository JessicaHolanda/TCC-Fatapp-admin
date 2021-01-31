import { Component, OnInit } from '@angular/core';
import { ChangePasswordValidatorService } from 'src/app/services/validators/change-password/change-password-validator.service';
import { UsersService } from 'src/app/services/firebase/users/users.service';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss'],
})
export class ChangePasswordModalComponent implements OnInit {

  changePasswordForm;
  validationMessages;

  constructor(
    private changePasswordValidator: ChangePasswordValidatorService,
    private usersService: UsersService,
  ) {
    this.changePasswordForm = this.changePasswordValidator.getChangePasswordForm();
    this.validationMessages = this.changePasswordValidator.getChangePasswordValidationsMessages();
  }

  ngOnInit() { }

  update() {
    if (!this.changePasswordForm.valid) {
      this.changePasswordValidator.validateAllFormFields();
    } else {
      this.usersService.updatePassword(this.changePasswordForm.value.new_password);
    }
  }
}
