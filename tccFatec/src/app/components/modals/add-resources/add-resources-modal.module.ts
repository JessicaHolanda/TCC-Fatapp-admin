import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddResourcesModalComponent } from './add-resources-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddResourcesModalComponent],
  entryComponents: [AddResourcesModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class AddResourcesModalModule { }
