import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangeAccessPerfilModalComponent } from '../../components/modals/change-access-perfil-modal/change-access-perfil-modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalsService } from '../../services/globals.service';
import { UsersService } from 'src/app/services/firebase/users/users.service';


@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.page.html',
  styleUrls: ['./access-control.page.scss'],
})

export class AccessControlPage implements AfterViewInit {

  constructor(
    private modalController: ModalController,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private global: GlobalsService,
  ) {
    this.createForm();
  }

  public users: any = new Array();
  public userSearch: any = new Array();
  public accessControlForm: FormGroup;


  ngAfterViewInit() {
    this.getUsers();
  }

  private createForm() {
    this.accessControlForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
    });
  }

  getUsers() {
    let i = 0;
    this.usersService.getUsers().then(snapshot => {
      snapshot.forEach(value => {
        this.users[i] = value.val();
        i++;
      });
    }).catch(error => {
      console.log(error);
      this.global.createAlert(error);
    });
  }

  async getUserSearch() {
    try {
      this.userSearch = [];
      const usersToFilter = this.users;

      const keyword = this.accessControlForm.value.name;

      this.userSearch = usersToFilter.filter(collection => {

        return collection.cpf.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.last_name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.user_type.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.name.toLowerCase() + collection.last_name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || collection.email.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });

    } catch (error) {
      console.log(error);
    }
  }

  async goToChangePerfilModal(passedUser) {
    const modal = await this.modalController.create({
      component: ChangeAccessPerfilModalComponent,
      componentProps: {
        user: passedUser
      }
    });
    modal.present();
  }

}
