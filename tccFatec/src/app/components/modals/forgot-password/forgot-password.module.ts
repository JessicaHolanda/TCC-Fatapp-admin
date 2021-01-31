import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [ForgotPasswordComponent],
  entryComponents: [ForgotPasswordComponent],
})
export class ForgotPasswordModule { }
