import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditEventPage } from './edit-event.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { EventsModule } from 'src/app/components/modals/events/events.module';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: EditEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    BrMaskerModule,
    EventsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditEventPage]
})
export class EditEventPageModule {}
