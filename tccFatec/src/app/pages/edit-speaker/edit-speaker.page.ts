import { Component } from '@angular/core';
import { EditSpeakerValidatorService } from 'src/app/services/validators/edit-speaker/edit-speaker-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { AlertController, ModalController } from '@ionic/angular';
import { SpeakersComponent } from 'src/app/components/modals/speakers/speakers.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.page.html',
  styleUrls: ['./edit-speaker.page.scss'],
})
export class EditSpeakerPage {

  public nameSpeaker = '';
  public phoneSpeaker = '';
  public phone2Speaker = '';
  public curriculumSpeaker = '';
  public emailSpeaker = '';
  public passedSpeaker = null;
  public editSpeakerForm;
  public validationMessages;
  public speakerId = '';
  public pictureSpeaker = null;
  public speakerImage;


  public speakerSearch = new Array();

  constructor(
    private editSpeakerValidator: EditSpeakerValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private alertController: AlertController,
    private modalController: ModalController,
    ) {
    this.editSpeakerForm = this.editSpeakerValidator.getEditSpeakerForm();
    this.validationMessages = this.editSpeakerValidator.getEditSpeakerFormValidationsMessages();
  }

  async submit() {
    try {
      if (!this.editSpeakerForm.valid) {
        this.editSpeakerValidator.validateAllFormFields();
      } else {
        this.editSpeakerForm.value.speakerPicture = this.speakerImage;
        const response: any = await this.apiCore.registerSpeaker(this.editSpeakerForm.value);
        if (response.id) {
          this.global.createAlert('Palestrante alterado com sucesso!');
          this.resetInputs();
        } else {
          this.global.createAlert('Erro ao alterar palestrante!');
        }

      }
    } catch (error) {
      console.log(error);
    }
  }

  removeDisable() {
    const elements = document.querySelectorAll(`.edit-form`);

    // @ts-ignore
    for (const item of elements) {
      item.removeAttribute('disabled');
    }
  }
  setDisable() {
    const elements = document.querySelectorAll(`.edit-form`);

    // @ts-ignore
    for (const item of elements) {
      item.setAttribute('disabled', '');
    }
  }

  async removeSpeaker() {
    try {
      let option = null;
      const alert = await this.alertController.create({
        message: 'Deseja mesmo remover o palestrante?',
        buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            option = false;
          }
        }, {
          text: 'Ok',
          handler: () => {
            option = true;
          }
        }
        ]
      });

      await alert.present();

      alert.onDidDismiss().then(async () => {

        if (option) {
          if (this.speakerId !== '') {
            const response = await this.apiCore.removeSpeaker(this.speakerId);
            await this.global.createToast('Palestrante removido com sucesso!');
            this.resetInputs();
          } else {
            this.global.createAlert('Consulte e selecione um palestrante');
          }

        }
      });
    } catch (error) {
      console.log(error);
    }


  }

  async openSpeakersModal() {
    try {
      const modal = await this.modalController.create({
        component: SpeakersComponent,
      });
      modal.present();

      modal.onDidDismiss()
      .then(async (data: any) => {
        if (data.data) {
          this.passedSpeaker = data.data;
          this.emailSpeaker = await this.passedSpeaker.speakerEmail;
          this.nameSpeaker = await this.passedSpeaker.speakerName;
          this.phoneSpeaker = await this.passedSpeaker.speakerPhone;
          this.phone2Speaker = await this.passedSpeaker.speakerPhone2;
          this.curriculumSpeaker = await this.passedSpeaker.speakerCurriculum;
          this.pictureSpeaker = await this.passedSpeaker.speakerPicture;
          this.speakerId = await this.passedSpeaker.id;
          this.removeDisable();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  resetInputs() {
    this.editSpeakerForm.reset();
    this.speakerId = '';
    this.setDisable();
  }

  onFileSelect(event) {
    this.speakerImage = event.target.files[0];
  }
}
