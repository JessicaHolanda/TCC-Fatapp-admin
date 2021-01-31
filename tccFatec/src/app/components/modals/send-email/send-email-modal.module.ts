import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components.module';
import { IonicModule } from '@ionic/angular';
import { SendEmailModalComponent } from './send-email-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SendEmailModalComponent],
  entryComponents: [SendEmailModalComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class SendEmailModalModule { }
