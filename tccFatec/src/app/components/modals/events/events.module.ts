import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ComponentsModule } from '../../components.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsComponent],
  entryComponents: [EventsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
