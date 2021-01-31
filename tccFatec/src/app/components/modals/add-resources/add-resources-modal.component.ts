import { Component, OnInit } from '@angular/core';
import { AddResourceValidatorService } from 'src/app/services/validators/add-resource/add-resource-validator.service';
import { NavParams, ModalController } from '@ionic/angular';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-add-resources-modal',
  templateUrl: './add-resources-modal.component.html',
  styleUrls: ['./add-resources-modal.component.scss'],
})
export class AddResourcesModalComponent {

  public passedRoomId: any = null;
  public addResourceForm;
  public validationMessages;

  public resources: any = null;
  public resource: any = null;


  constructor(
    private addResourceValidator: AddResourceValidatorService,
    private navParams: NavParams,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private modalController: ModalController,
  ) {
    this.passedRoomId = this.navParams.get('roomId');
    this.addResourceForm = this.addResourceValidator.getAddResourceForm();
    this.validationMessages = this.addResourceValidator.getAddResourceFormValidationsMessages();
    this.getAllResources();
  }


  async submit() {
    try {
      if (!this.addResourceForm.valid) {
        this.addResourceValidator.validateAllFormFields();
      } else {
        this.resource = await this.resources.filter(collection => {
          return collection.name === this.addResourceForm.value.name;
        });
        const response = await this.apiCore.addResourceRoom(this.resource[0].id,
          this.addResourceForm.value.resource_amount, this.passedRoomId);
        this.global.createToast('Recurso adicionado à sala');
        this.modalController.dismiss();
      }
    } catch (error) {
      console.log(error);
    }

  }

  async getAllResources() {
    const loading = await this.global.createLoading('Carregando...');
    await loading.present();
    const response = await this.apiCore.getAllResources();
    this.resources = response;
    await loading.dismiss();
  }
}
