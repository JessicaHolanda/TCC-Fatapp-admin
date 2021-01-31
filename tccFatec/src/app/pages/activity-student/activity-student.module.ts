import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivityStudentPage } from './activity-student.page';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  {
    path: '',
    component: ActivityStudentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ActivityStudentPage],
  providers: []
})
export class ActivityStudentPageModule {}
