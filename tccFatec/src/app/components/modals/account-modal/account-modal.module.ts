import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccountModalComponent } from './account-modal.component';
import { ComponentsModule } from '../../components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordModalModule } from '../change-password-modal/change-password-modal.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrMaskerModule } from 'br-mask';


@NgModule({

  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    ChangePasswordModalModule,
    FontAwesomeModule,
    BrMaskerModule,
  ],
  declarations: [AccountModalComponent],
  entryComponents: [AccountModalComponent],
})
export class AccountModalModule { }
