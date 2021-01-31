import { Component, OnInit } from '@angular/core';
import { AddRoomValidatorService } from 'src/app/services/validators/add-room/add-room-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-room-modal',
  templateUrl: './edit-room-modal.component.html',
  styleUrls: ['./edit-room-modal.component.scss'],
})
export class EditRoomModalComponent implements OnInit {
  formRoom;
  validationMessages;
  passedRoom = null;

  number = '';
  type = '';
  capacity = '';

  constructor(
    private addRoomValidator: AddRoomValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.passedRoom = this.navParams.get('room');
    this.formRoom = this.addRoomValidator.getFormRoom();
    this.validationMessages = this.addRoomValidator.getFormRoomValidationsMessages();
    this.initialize();
  }

  initialize() {
    this.number = this.passedRoom.name;
    this.type = this.passedRoom.type;
    this.capacity = this.passedRoom.capacity;
  }

  async submit() {
    try {
      if (!this.formRoom.valid) {
        this.addRoomValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Aguarde...');
        await loading.present();
        const response: any = await this.apiCore.updateRoom(this.formRoom.value, this.passedRoom.id);
        if (response.id) {
          this.global.createAlert('Sala alterada com sucesso!');
          await this.modalController.dismiss();
        } else {
          this.global.createAlert('Erro ao cadastrar uma sala');
        }
        await loading.dismiss();

      }

    } catch (error) {
      console.log(error);
      this.global.createAlert('Erro ao cadastrar uma sala');
    }

  }

}
