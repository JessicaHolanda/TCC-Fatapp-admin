import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseModalComponent } from './edit-course-modal.component';

@NgModule({
  declarations: [EditCourseModalComponent],
  entryComponents: [EditCourseModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class EditCourseModalModule { }
