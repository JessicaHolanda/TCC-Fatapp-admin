import { Component } from '@angular/core';
import { EditCourseValidatorService } from 'src/app/services/validators/edit-course/edit-course-validator.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-course-modal',
  templateUrl: './edit-course-modal.component.html',
  styleUrls: ['./edit-course-modal.component.scss'],
})
export class EditCourseModalComponent {

  public passedCourse;
  public editCourseForm;
  public validationMessages;

  constructor(
    private editCourseValidator: EditCourseValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private navParams: NavParams,
    private modalController: ModalController,
  ) {
    this.editCourseForm = this.editCourseValidator.getEditCourseForm();
    this.validationMessages = this.editCourseValidator.getEditCourseFormValidationsMessages();
    this.passedCourse = this.navParams.get('course');
  }

  async submit() {
    try {
      if (!this.editCourseForm.valid) {
        this.editCourseValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Carregando...');
        await loading.present();
        const response = await this.apiCore.updateCourse(this.editCourseForm.value, this.passedCourse.id);
        await this.global.createToast('Público-alvo editado com sucesso');
        await this.modalController.dismiss();
        await loading.dismiss();
      }
    } catch (error) {
      console.log(error);
    }

  }


}
