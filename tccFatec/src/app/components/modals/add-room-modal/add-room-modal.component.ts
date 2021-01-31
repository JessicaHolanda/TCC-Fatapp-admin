import { Component, OnInit } from '@angular/core';
import { AddRoomValidatorService } from '../../../services/validators/add-room/add-room-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss'],
})
export class AddRoomModalComponent implements OnInit {
  formRoom;
  validationMessages;

  constructor(
    private addRoomValidator: AddRoomValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.formRoom = this.addRoomValidator.getFormRoom();
    this.validationMessages = this.addRoomValidator.getFormRoomValidationsMessages();
  }

  async submit() {
    try {
      if (!this.formRoom.valid) {
        this.addRoomValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Aguarde...');
        await loading.present();
        const response = await this.apiCore.registerRoom(this.formRoom.value);
        await loading.dismiss();
        await this.modalController.dismiss();
      }

    } catch (error) {
      console.log(error);
      this.global.createAlert('Erro ao cadastrar uma sala');
    }

  }
}
