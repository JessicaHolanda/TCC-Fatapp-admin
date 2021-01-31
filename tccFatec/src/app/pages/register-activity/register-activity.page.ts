import { Component } from '@angular/core';
import { RegisterActivityValidatorService } from 'src/app/services/validators/register-activity/register-activity-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { ModalController } from '@ionic/angular';
import { SpeakersComponent } from 'src/app/components/modals/speakers/speakers.component';
import { EventsComponent } from 'src/app/components/modals/events/events.component';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.page.html',
  styleUrls: ['./register-activity.page.scss'],
})
export class RegisterActivityPage {

  public activityForm;
  public validationMessages;
  public speaker = null;
  public speakerEmail = '';
  public event: any = null;
  public eventTitle = '';
  public targetAudience;
  public roomId = '';

  constructor(
    private activityValidator: RegisterActivityValidatorService,
    private apiCore: FatappCoreService,
    private modalController: ModalController,
    private tools: ToolsService,
    private global: GlobalsService,
    private route: ActivatedRoute,
  ) {
    this.activityForm = this.activityValidator.getActivityForm();
    this.validationMessages = this.activityValidator.getActivityFormValidationsMessages();
    this.getTargetAudience();
    this.initialize();
  }

  async initialize() {
    try {
      if (this.route.snapshot.queryParams.id) {
        this.roomId = await this.route.snapshot.queryParams.id;
      } else {
        console.log('Parametro inválido!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async submit() {
    try {
      let validDate = false;
      if (!this.activityForm.valid) {
        this.activityValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Cadastrando atividade...');
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
          const response: any = await this.apiCore.registerActivity(objActivity);
          await loading.dismiss();
          if (response.title) {
            this.global.createAlert('Atividade cadastrada com sucesso!');
            this.resetInputs();
          }
        } else {
          this.global.createAlert('Data inválida!');
        }
      }
    } catch (error) {
      console.log(error);
      this.global.createAlert('Erro ao cadastrar atividade, verifique se a data está dentro do range da data do evento');
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

  resetInputs() {
    this.activityForm.reset();
    this.speaker = null;
    this.event = null;
    this.eventTitle = '';
    this.speakerEmail = '';
  }
}
