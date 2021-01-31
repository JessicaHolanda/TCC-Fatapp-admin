import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditSpeakerPage } from './edit-speaker.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrMaskerModule } from 'br-mask';
import { SpeakersModule } from 'src/app/components/modals/speakers/speakers.module';

const routes: Routes = [
  {
    path: '',
    component: EditSpeakerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    ComponentsModule,
    SpeakersModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditSpeakerPage]
})
export class EditSpeakerPageModule {}
