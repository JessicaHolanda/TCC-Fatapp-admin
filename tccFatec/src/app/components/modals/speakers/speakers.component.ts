import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalsService } from 'src/app/services/globals.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent {

  public speakers;
  public speakerSearch: any = new Array();
  public speakerSearchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private global: GlobalsService,
    private apiCore: FatappCoreService,
    private modalController: ModalController,
  ) {
    this.createForm();
    this.getSpeakers();
  }

  private createForm() {
    this.speakerSearchForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
    });
  }

  async getSpeakers() {
    try {
      const loading = await this.global.createLoading('Carregando...');
      await loading.present();
      this.speakers = await this.apiCore.getAllSpeakers();
      await loading.dismiss();
    } catch (error) {

    }

  }

  async getSpeakerSearch() {
    try {
      this.speakerSearch = [];
      const speakersToFilter = this.speakers;

      const keyword = this.speakerSearchForm.value.name;

      this.speakerSearch = speakersToFilter.filter(collection => {

        return collection.speakerName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.speakerPhone.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.speakerEmail.toLowerCase().indexOf(keyword.toLowerCase()) > -1;

      });

    } catch (error) {
      console.log(error);
    }
  }

  async selectSpeaker(speaker) {
    this.modalController.dismiss(speaker);
  }


}
