import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentListPage } from './present-list.page';
import {ComponentsModule} from '../../components/components.module';
import { SendEmailModalModule } from 'src/app/components/modals/send-email/send-email-modal.module';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: PresentListPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        BrMaskerModule,
        SendEmailModalModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
  declarations: [PresentListPage]
})
export class PresentListPageModule {}
