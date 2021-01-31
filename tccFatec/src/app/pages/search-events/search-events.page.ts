import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GlobalsService } from 'src/app/services/globals.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { ModalController } from '@ionic/angular';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.page.html',
  styleUrls: ['./search-events.page.scss'],
})
export class SearchEventsPage {
  public events = null;
  public eventSearch = new Array();
  public eventSearchForm: FormGroup;

  public initialDate = '';
  public finalDate = '';

  constructor(
    private formBuilder: FormBuilder,
    private global: GlobalsService,
    private apiCore: FatappCoreService,
    private modalController: ModalController,
    private tools: ToolsService,
  ) {
    this.createForm();
    this.getEvents();
  }

  private createForm() {
    this.eventSearchForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
    });
  }

  async getEvents() {
    try {
      const loading = await this.global.createLoading('Carregando...');
      await loading.present();
      this.events = await this.apiCore.getAllEvents();
      if (this.events) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.events.length; i++) {
          this.tools.formatFrontDate(this.events[i].initialDate);
          let formatedInitialDate = this.tools.formatFrontDate(this.events[i].initialDate);
          let formatedFinalDate = this.tools.formatFrontDate(this.events[i].finalDate);
          let formatedDate = {
            formatedInitialDate,
            formatedFinalDate,
          };
          Object.assign(this.events[i], formatedDate);
        }
      }
      await loading.dismiss();
    } catch (error) {
      console.log(error);
    }
  }

  async getEventsSearch() {
    try {
      this.eventSearch = [];
      const eventsToFilter = this.events;

      const keyword = this.eventSearchForm.value.name;

      this.eventSearch = eventsToFilter.filter(collection => {

        return collection.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.edition.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.initialDate.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.finalDate.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });

    } catch (error) {
      console.log(error);
    }
  }

  selectEvent(event) {
    this.global.navigateByUrl('admin/present-list?id=' + event.id);
  }
}
