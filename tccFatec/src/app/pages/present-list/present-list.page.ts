import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SendEmailModalComponent } from 'src/app/components/modals/send-email/send-email-modal.component';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.page.html',
  styleUrls: ['./present-list.page.scss'],
})
export class PresentListPage {

  public activities = null;
  public activitySearchForm: FormGroup;
  public activitySearch = new Array();
  private eventId = '';

  constructor(
    private tools: ToolsService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private route: ActivatedRoute,
  ) {
    this.createForm();
    this.getParams();
  }

  ionViewDidEnter() {

  }

  async goToReport(activityId) {
    try {
      this.global.navigateByUrl('admin/report?id=' + activityId);
    } catch (error) {
      console.log(error);
    }
  }

  async openSendEmailModal(activity) {
    const modal = await this.modalController.create({
      component: SendEmailModalComponent,
      componentProps: {
        activity,
      }
    });
    await modal.present();
  }

  async getParams() {
    try {
      if (this.route.snapshot.queryParams.id) {
        this.eventId = await this.route.snapshot.queryParams.id;
        await this.getEventActivities();
      }
    } catch (error) {
      console.log(error);
    }
  }


  private createForm() {
    this.activitySearchForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
    });
  }

  async getEventActivities() {
    const loading = await this.global.createLoading('Carregando atividades...');
    await loading.present();
    this.activities = await this.apiCore.getEventActivities(this.eventId);
    if (this.activities) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.activities.length; i++) {
        this.tools.formatFrontTimeDate(this.activities[i].initialDate);
        let formatedInitialTime = await  this.tools.formatFrontDate(this.activities[i].initialDate);
        let formatedFinalTime = await this.tools.formatFrontDate(this.activities[i].finalDate);
        let subscribers = await this.apiCore.getSubscriptions(this.activities[i].id);
        let obj = {
          formatedInitialTime,
          formatedFinalTime,
          subscribers,
        };
        Object.assign(this.activities[i], obj);
      }
    }
    await loading.dismiss();
  }

  async goToActivityStudent(activityId) {
    try {
      this.global.navigateByUrl('admin/activity-student?id=' + activityId);
    } catch (error) {
      console.log(error);
    }
  }
  async goToQrCode(activityId) {
    try {
      this.global.navigateByUrl('admin/qr-code?id=' + activityId);
    } catch (error) {
      console.log(error);
    }
  }

  async getActivitySearch() {
    try {
      this.activitySearch = [];
      const activitiesToFilter = this.activities;
      const keyword = this.activitySearchForm.value.name;

      this.activitySearch = activitiesToFilter.filter(collection => {
        return collection.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.type.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.room.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.room.type.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.speaker.speakerName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.speaker.speakerEmail.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.formatedFinalTime.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.formatedInitialTime.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });

    } catch (error) {
      console.log(error);
    }
  }
}
