import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
import {ChangeAccessPerfilModalModule} from "../../components/modals/change-access-perfil-modal/change-access-perfil-modal.module";
import {BrMaskerModule} from "br-mask";

import { AccessControlPage } from './access-control.page';

const routes: Routes = [
  {
    path: '',
    component: AccessControlPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ChangeAccessPerfilModalModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BrMaskerModule,
  ],
  declarations: [AccessControlPage]
})
export class AccessControlPageModule {}
