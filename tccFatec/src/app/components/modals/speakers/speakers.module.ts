import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SpeakersComponent } from './speakers.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [SpeakersComponent],
  entryComponents: [SpeakersComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class SpeakersModule { }
