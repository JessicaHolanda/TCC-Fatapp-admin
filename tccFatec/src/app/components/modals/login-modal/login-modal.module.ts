import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginModalComponent } from './login-modal.component';
import { ComponentsModule } from '../../components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordModule } from '../forgot-password/forgot-password.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotPasswordModule,
  ],
  declarations: [LoginModalComponent],
  entryComponents: [LoginModalComponent]
})
export class LoginModalModule { }
