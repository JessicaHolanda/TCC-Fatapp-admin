import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeAccessPerfilModalComponent } from './change-access-perfil-modal.component';
import { IonicModule } from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ComponentsModule } from "../../components.module";
import {BrMaskerModule} from "br-mask";

@NgModule({
  declarations: [ChangeAccessPerfilModalComponent],
  entryComponents: [ChangeAccessPerfilModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ChangeAccessPerfilModalModule { }
