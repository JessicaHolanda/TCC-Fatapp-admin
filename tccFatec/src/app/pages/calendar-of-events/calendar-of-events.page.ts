import { Component } from '@angular/core';
import { GlobalsService } from 'src/app/services/globals.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-calendar-of-events',
  templateUrl: './calendar-of-events.page.html',
  styleUrls: ['./calendar-of-events.page.scss'],
})
export class CalendarOfEventsPage {

  public roomId = null;
  public activities = null;
  public activitiesRoom = null;
  public activitySearchForm: FormGroup;
  public activitySearch = new Array();
  public pageLoaded = false;

  constructor(
    private global: GlobalsService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private apiCore: FatappCoreService,
    private tools: ToolsService,
    private formBuilder: FormBuilder,
  ) {
    this.initialize();
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

  async getAllActivities() {
    const loading = await this.global.createLoading('Carregando agenda...');
    await loading.present();
    this.activities = await this.apiCore.getAllActivity();
    if (this.activities) {
      if (this.roomId) {
        this.activitiesRoom = await this.activities.filter(collection => {
          return collection.room.id == this.roomId;
        });
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.activitiesRoom.length; i++) {
          this.tools.formatFrontTimeDate(this.activitiesRoom[i].initialDate);
          let formatedInitialTime = this.tools.formatFrontTimeDate(this.activitiesRoom[i].initialDate);
          let formatedFinalTime = this.tools.formatFrontTimeDate(this.activitiesRoom[i].finalDate);
          let formatedDate = this.tools.formatFrontDateWithoutTime(this.activitiesRoom[i].initialDate);
          let formatedTime = {
            formatedInitialTime,
            formatedFinalTime,
            formatedDate,
          };
          Object.assign(this.activitiesRoom[i], formatedTime);
        }
        this.pageLoaded = true;
      } else {
        console.log('Sala inexistente');
      }
    }
    this.pageLoaded = true;
    await loading.dismiss();
  }


  async goToQrCode(activityId) {
    try {
      this.global.navigateByUrl('admin/qr-code?id=' + activityId);
    } catch (error) {
      console.log(error);
    }
  }

  async goToRegisterActivity() {
    try {
      this.global.navigateByUrl('admin/register-activity?id=' + this.roomId);
    } catch (error) {
      console.log(error);
    }
  }

  async getActivitySearch() {
    try {
      this.activitySearch = [];
      const activitiesToFilter = this.activitiesRoom;

      const keyword = this.activitySearchForm.value.name;

      this.activitySearch = activitiesToFilter.filter(collection => {
        return collection.formatedInitialTime.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.formatedFinalTime.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.formatedDate.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });

    } catch (error) {
      console.log(error);
    }
  }
}
