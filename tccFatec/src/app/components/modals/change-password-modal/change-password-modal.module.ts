import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ChangePasswordModalComponent} from "./change-password-modal.component";
import {ComponentsModule} from '../../components.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({

    imports: [
        CommonModule,
        IonicModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
    declarations: [ChangePasswordModalComponent],
    entryComponents: [ChangePasswordModalComponent],

})
export class ChangePasswordModalModule {
}
