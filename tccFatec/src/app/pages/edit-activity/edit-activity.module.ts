import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditActivityPage } from './edit-activity.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrMaskerModule } from 'br-mask';
import { ActivitiesModule } from 'src/app/components/modals/activities/activities.module';
import { EventsModule } from 'src/app/components/modals/events/events.module';
import { SpeakersModule } from 'src/app/components/modals/speakers/speakers.module';

const routes: Routes = [
  {
    path: '',
    component: EditActivityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    BrMaskerModule,
    EventsModule,
    SpeakersModule,
    ActivitiesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditActivityPage]
})
export class EditActivityPageModule {}
