import { Component } from '@angular/core';
import { SendEmailValidatorService } from 'src/app/services/validators/send-email/send-email-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { NavParams } from '@ionic/angular';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-send-email-modal',
  templateUrl: './send-email-modal.component.html',
  styleUrls: ['./send-email-modal.component.scss'],
})
export class SendEmailModalComponent {

  public sendEmailForm;
  public validationMessages;
  public passedActivity;

  constructor(
    private sendEmailValidator: SendEmailValidatorService,
    private apiCore: FatappCoreService,
    private navParams: NavParams,
    private global: GlobalsService,
  ) {
    this.passedActivity = this.navParams.get('activity');
    this.sendEmailForm = this.sendEmailValidator.getSendEmailForm();
    this.validationMessages = this.sendEmailValidator.getSendEmailFormValidationsMessages();
  }

  async submit() {
    try {
      if (!this.sendEmailForm.valid) {
        this.sendEmailValidator.validateAllFormFields();
      } else {
        const response = await this.apiCore.sendEmail(this.sendEmailForm.value, this.passedActivity.id);
        if (response) {
          this.global.createAlert('E-mail foi enviado! Pode demorar até 10 minutos para e-mail destino receber');
        } else {
          this.global.createAlert('Ocorreu um erro ao enviar e-mail');
        }
      }
    } catch (error) {
      this.global.createAlert('Ocorreu um erro ao enviar e-mail');
    }
  }

}
