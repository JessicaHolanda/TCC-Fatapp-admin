import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRoomModalComponent } from './edit-room-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [EditRoomModalComponent],
  entryComponents: [EditRoomModalComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class EditRoomModalModule { }
