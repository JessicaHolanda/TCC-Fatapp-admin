import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoomPage } from './room.page';
import {ComponentsModule} from "../../components/components.module";
import {AddRoomModalModule} from "../../components/modals/add-room-modal/add-room-modal.module";

const routes: Routes = [
  {
    path: '',
    component: RoomPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddRoomModalModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
  declarations: [RoomPage]
})
export class RoomPageModule {}
