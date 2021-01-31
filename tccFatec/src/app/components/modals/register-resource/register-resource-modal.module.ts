import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components.module';
import { RegisterResourceModalComponent } from './register-resource-modal.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterResourceModalComponent],
  entryComponents: [RegisterResourceModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterResourceModalModule { }
