import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddRoomModalComponent} from './add-room-modal.component';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../../components.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddRoomModalComponent],
  entryComponents: [AddRoomModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class AddRoomModalModule { }
