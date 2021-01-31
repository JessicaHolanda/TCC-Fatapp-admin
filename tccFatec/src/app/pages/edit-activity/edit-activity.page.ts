import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ActivitiesComponent } from 'src/app/components/modals/activities/activities.component';
import { RegisterActivityValidatorService } from 'src/app/services/validators/register-activity/register-activity-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { EventsComponent } from 'src/app/components/modals/events/events.component';
import { SpeakersComponent } from 'src/app/components/modals/speakers/speakers.component';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.page.html',
  styleUrls: ['./edit-activity.page.scss'],
})
export class EditActivityPage {

  public activityForm;
  public validationMessages;
  public speaker = null;
  public speakerEmail = '';
  public event: any = null;
  public eventTitle = '';
  public targetAudience;
  public roomId = '';


  public activityId = null;
  public activityTitle = '';
  public activityDescription = '';
  public formatedInitialTime = '';
  public formatedFinalTime = '';
  public activityType = '';

  constructor(
    private modalController: ModalController,
    private activityValidator: RegisterActivityValidatorService,
    private apiCore: FatappCoreService,
    private tools: ToolsService,
    private alertController: AlertController,
    private global: GlobalsService,
    ) {
    this.activityForm = this.activityValidator.getActivityForm();
    this.validationMessages = this.activityValidator.getActivityFormValidationsMessages();
    this.getTargetAudience();
  }

  async submit() {
    try {
      let validDate = false;
      if (!this.activityForm.valid) {
        this.activityValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Alterando atividade...');
        await loading.present();
        validDate = await this.tools.validateDate(this.activityForm.value.initialDate, this.activityForm.value.finalDate);
        if (validDate) {
          const initialDate = await this.tools.formatDate(this.activityForm.value.initialDate);
          const finalDate = await this.tools.formatDate(this.activityForm.value.finalDate);
          const objActivity = {
            title: this.activityForm.value.title,
            type: this.activityForm.value.type,
            description: this.activityForm.value.description,
            targetAudience: this.activityForm.value.targetAudience,
            initialDate,
            finalDate,
            obsActivity: 'nenhuma',
            obsResource: 'nenhuma',
            roomId: this.roomId,
            eventId: this.event.id,
            speakerId: this.speaker.id
          };
          const response: any = await this.apiCore.updateActivity(objActivity, this.activityId);
          await loading.dismiss();
          if (response.title) {
            this.global.createAlert('Atividade alterada com sucesso!');
            this.resetInputs();
          }
        } else {
          this.global.createAlert('Data inválida!');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  async getTargetAudience() {
    try {
      this.targetAudience = await this.apiCore.getAllCourses();
    } catch (error) {
      console.log(error);
    }
  }

  async openSpeakersModal() {
    const modal = await this.modalController.create({
      component: SpeakersComponent,
    });
    modal.present();

    modal.onDidDismiss()
    .then((data: any) => {
      if (data.data) {
        this.speaker = data.data;
        this.speakerEmail = this.speaker.speakerEmail;
      }
    });
  }

  async openEventsModal() {
    const modal = await this.modalController.create({
      component: EventsComponent,
    });
    modal.present();

    modal.onDidDismiss()
    .then((data: any) => {
      if (data.data) {
        const response = data.data;
        this.eventTitle = response.title;
        this.event = response;
      }
    });
  }

  async openActivitiesModal() {
    const modal = await this.modalController.create({
      component: ActivitiesComponent,
    });
    modal.present();

    modal.onDidDismiss()
    .then(async (data: any) => {
      if (data.data) {
        this.activityId = data.data.id;
        this.activityTitle = data.data.title;
        this.activityDescription = data.data.description;
        this.formatedInitialTime = data.data.formatedInitialTime;
        this.formatedFinalTime = data.data.formatedFinalTime;
        this.activityType = data.data.type;
        this.speaker = data.data.speaker;
        this.event = data.data.event;
        this.speakerEmail = data.data.speaker.speakerEmail;
        this.eventTitle = data.data.event.title;
        this.roomId = data.data.room.id;
      }
    });
  }

  resetInputs() {
    this.activityForm.reset();
    this.speaker = null;
    this.event = null;
    this.eventTitle = '';
    this.speakerEmail = '';
    this.activityId = null;
  }

  async removeActivity() {

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
          const loading = await this.global.createLoading('Carregando...');
          await loading.present();
          const response = await this.apiCore.removeActivity(this.activityId);
          this.resetInputs();
          await loading.dismiss();
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

}
