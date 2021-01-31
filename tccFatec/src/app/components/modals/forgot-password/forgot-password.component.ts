import { Component } from '@angular/core';
import { ForgetPasswordValidatorService } from 'src/app/services/validators/forget-password/forget-password-validator.service';
import { UsersService } from 'src/app/services/firebase/users/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {

  public forgotPasswordForm;
  public validationMessages;

  constructor(
    private forgotPasswordValidator: ForgetPasswordValidatorService,
    private usersService: UsersService,
  ) {
    this.forgotPasswordForm = this.forgotPasswordValidator.getPasswordForm();
    this.validationMessages = this.forgotPasswordValidator.getPasswordFormValidationsMessages();
  }

  submit() {
    if (!this.forgotPasswordForm.valid) {
      this.forgotPasswordValidator.validateAllFormFields();
    } else {
      this.usersService.forgetPassword(this.forgotPasswordForm.value);
    }
  }
}
