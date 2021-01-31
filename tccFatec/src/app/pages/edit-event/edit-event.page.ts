import { Component } from '@angular/core';
import { EditEventValidatorService } from 'src/app/services/validators/edit-event/edit-event-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { EventsComponent } from 'src/app/components/modals/events/events.component';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage {

  public formEvent;
  public validationMessages;
  public eventSearch = new Array();
  public title = '';
  public edition = '';
  public initialDate = '';
  public finalDate = '';
  public banner: any = null;
  public eventId = '';
  public certifieds;
  public description = '';


  constructor(
    private eventValidator: EditEventValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private navController: NavController,
    private alertController: AlertController,
    private tools: ToolsService,
    private modalController: ModalController,
  ) {
    this.getAllCertifieds();
    this.formEvent = this.eventValidator.getFormEvent();
    this.validationMessages = this.eventValidator.getFormEventValidationsMessages();
  }

  async selectEvent(id) {
    try {
      const response: any = await this.apiCore.getEvent(id);

    } catch (error) {
      console.log(error);
    }
  }


  async upload() {
    try {
      let validDate = false;
      if (!this.formEvent.valid) {
        this.eventValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Carregando...');
        await loading.present();
        validDate = await this.tools.validateDate(this.formEvent.value.initialDate, this.formEvent.value.finalDate);
        if (validDate) {
          this.formEvent.value.initialDate = await this.tools.formatDate(this.formEvent.value.initialDate);
          this.formEvent.value.finalDate = await this.tools.formatDate(this.formEvent.value.finalDate);
          const response = await this.apiCore.updateEvent(this.formEvent.value, this.eventId);
          await loading.dismiss();
          this.global.createToast('Evento alterado com sucesso!');
          this.resetInputs();
        } else {
          await loading.dismiss();
          this.global.createAlert('Data inválida!');
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

  async removeEvent() {
    try {
      let option = null;
      const alert = await this.alertController.create({
        message: 'Deseja mesmo remover?',
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
          if (this.eventId !== '') {
            const loading = await this.global.createLoading('Carregando...');
            await loading.present();
            const response = await this.apiCore.removeEvent(this.eventId);
            this.global.createToast('Evento excluído com sucesso!');
            this.resetInputs();
            await loading.dismiss();
          } else {
            this.global.createAlert('Consulte e selecione um evento');
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async openEventsModal() {
    const modal = await this.modalController.create({
      component: EventsComponent,
    });
    modal.present();

    modal.onDidDismiss()
      .then(async (data: any) => {
        if (data.data) {
          this.title = await data.data.title;
          this.edition = await data.data.edition;
          this.initialDate = await this.tools.formatFrontDate(data.data.initialDate);
          this.finalDate = await this.tools.formatFrontDate(data.data.finalDate);
          this.eventId = await data.data.id;
          this.banner = '';
          this.description = await data.data.description;
          this.removeDisable();
        }
      });
  }

  resetInputs() {
    this.formEvent.reset();
    this.eventId = '';
    this.setDisable();
  }

  selectBanner(event) {
    this.formEvent.value.banner = event.target.files[0];
  }

  async getAllCertifieds() {
    this.certifieds = await this.apiCore.getAllCertifieds();
  }
}
