import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { RegisterEventPage } from './register-event.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: RegisterEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterEventPage]
})
export class RegisterEventPageModule {}
