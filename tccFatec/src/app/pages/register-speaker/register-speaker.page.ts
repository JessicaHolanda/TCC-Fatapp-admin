import { Component } from '@angular/core';
import { RegisterSpeakerValidatorService } from 'src/app/services/validators/register-speaker/register-speaker-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';


@Component({
  selector: 'app-register-speaker',
  templateUrl: './register-speaker.page.html',
  styleUrls: ['./register-speaker.page.scss'],
})
export class RegisterSpeakerPage {

  public speakerForm;
  public validationMessages;
  public speakerImage = null;

  constructor(
    private speakerValidator: RegisterSpeakerValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
  ) {
    this.speakerForm = this.speakerValidator.getSpeakerForm();
    this.validationMessages = this.speakerValidator.getSpeakerFormValidationsMessages();
  }

  async submit() {
    try {
      if (!this.speakerForm.valid) {
        this.speakerValidator.validateAllFormFields();
      } else {
        this.speakerForm.value.speakerPicture = this.speakerImage;
        const response: any = await this.apiCore.registerSpeaker(this.speakerForm.value);
        if (response.speakerName) {
          this.global.createAlert('Palestrante cadastrado com sucesso!');
          this.resetInputs();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  resetInputs() {
    this.speakerForm.reset();
  }

  onFileSelect(event) {
    this.speakerImage = event.target.files[0];
  }

}
