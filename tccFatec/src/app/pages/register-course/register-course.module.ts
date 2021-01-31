import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterCoursePage } from './register-course.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditCourseModalModule } from 'src/app/components/modals/edit-course/edit-course-modal.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterCoursePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditCourseModalModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterCoursePage]
})
export class RegisterCoursePageModule {}
