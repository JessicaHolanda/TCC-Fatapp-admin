import { Component } from '@angular/core';
import { RegisterCourseValidatorService } from 'src/app/services/validators/register-course/register-course.service';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { ModalController, AlertController } from '@ionic/angular';
import { EditCourseModalComponent } from 'src/app/components/modals/edit-course/edit-course-modal.component';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.page.html',
  styleUrls: ['./register-course.page.scss'],
})
export class RegisterCoursePage {

  public registerCourseForm;
  public validationMessages;
  public courses: any = null;

  constructor(
    private registerCourseValidator: RegisterCourseValidatorService,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private modalController: ModalController,
    private alertController: AlertController,
  ) {
    this.registerCourseForm = this.registerCourseValidator.getRegisterCourseForm();
    this.validationMessages = this.registerCourseValidator.getRegisterCourseFormValidationsMessages();
  }

  ionViewDidEnter() {
    this.getAllCourses();
  }

  async submit() {
    try {
      if (!this.registerCourseForm.valid) {
        this.registerCourseValidator.validateAllFormFields();
      } else {
        const loading = await this.global.createLoading('Carregando...');
        await loading.present();
        const response = await this.apiCore.registerCourse(this.registerCourseForm.value);
        this.getAllCourses();
        await loading.dismiss();
      }
    } catch (error) {
      console.log(error);
    }

  }

  async getAllCourses() {
    try {
      const loading = await this.global.createLoading('Carregando...');
      await loading.present();
      const response = await this.apiCore.getAllCourses();
      this.courses = response;
      await loading.dismiss();
    } catch (error) {
      console.log(error);
      this.global.createAlert(error);
    }
  }

  async removeCourse(id) {
    try {

      let option = null;
      const alert = await this.alertController.create({
        // tslint:disable-next-line:max-line-length
        message: 'A remoção do público-alvo também pode ocasionar na remoção de atividades que estão relacionadas a ele. Deseja mesmo remover?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              option = false;
            }
          }, {
            text: 'Ok',
            handler: () => {
              option = true;
            }
          }
        ]
      });

      await alert.present();

      alert.onDidDismiss().then(async () => {

        if (option) {

          const response = await this.apiCore.removeCourse(id);
          this.global.createAlert('Público-alvo removido com sucesso!');
          this.getAllCourses();
        }
      });

    } catch (error) {
      console.log(error);
      this.global.createAlert('Ocorreu um erro ao remover o público-alvo');
    }
  }

  async goToEditCourse(passedCourse) {
    try {
      const modal = await this.modalController.create({
        component: EditCourseModalComponent,
        componentProps: {
          course: passedCourse,
        }
      });
      modal.present();
    } catch (error) {
      console.log(error);
    }
  }
}
