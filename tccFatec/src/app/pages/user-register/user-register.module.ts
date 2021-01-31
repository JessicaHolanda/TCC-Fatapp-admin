import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserRegisterPage } from './user-register.page';
import {ComponentsModule} from "../../components/components.module";
import {BrMaskerModule} from "br-mask";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const routes: Routes = [
  {
    path: '',
    component: UserRegisterPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule,
        ReactiveFormsModule,
        BrMaskerModule,
        FontAwesomeModule,
    ],
  declarations: [UserRegisterPage]
})
export class UserRegisterPageModule {}
