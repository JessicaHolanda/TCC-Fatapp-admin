import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { IonicModule } from '@ionic/angular';

import { CalendarOfEventsPage } from './calendar-of-events.page';
import {ComponentsModule} from '../../components/components.module';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: CalendarOfEventsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BrMaskerModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule,
        FontAwesomeModule,
    ],
  declarations: [CalendarOfEventsPage]
})
export class CalendarOfEventsPageModule {}
