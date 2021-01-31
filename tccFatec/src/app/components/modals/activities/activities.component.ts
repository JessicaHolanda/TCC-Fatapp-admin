import { Component } from '@angular/core';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {

  public activities = null;
  public activitySearchForm: FormGroup;
  public activitySearch = new Array();

  constructor(
    private tools: ToolsService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
  ) {
    this.createForm();
  }

  ionViewDidEnter() {
    this.getAllActivities();
  }

  private createForm() {
    this.activitySearchForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
    });
  }

  async getAllActivities() {
    const loading = await this.global.createLoading('Carregando agenda...');
    await loading.present();
    this.activities = await this.apiCore.getAllActivity();
    if (this.activities) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.activities.length; i++) {
        let formatedInitialTime = this.tools.formatFrontDate(this.activities[i].initialDate);
        let formatedFinalTime = this.tools.formatFrontDate(this.activities[i].finalDate);
        let formatedTime = {
          formatedInitialTime,
          formatedFinalTime,
        };
        Object.assign(this.activities[i], formatedTime);
      }
    }
    await loading.dismiss();
  }


  async getActivitySearch() {
    try {
      this.activitySearch = [];
      const activitiesToFilter = this.activities;

      const keyword = this.activitySearchForm.value.name;

      this.activitySearch = activitiesToFilter.filter(collection => {

        return collection.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.formatedInitialTime.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.formatedFinalTime.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.type.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.event.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.event.edition.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.speaker.speakerName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.speaker.speakerEmail.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.room.type.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });

    } catch (error) {
      console.log(error);
    }
  }

  async selectActivity(activity) {
    this.modalController.dismiss(activity);
  }

}
