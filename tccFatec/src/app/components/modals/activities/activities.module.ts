import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components.module';
import { ActivitiesComponent } from './activities.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActivitiesComponent],
  entryComponents: [ActivitiesComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class ActivitiesModule { }
