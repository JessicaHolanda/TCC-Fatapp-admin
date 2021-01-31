import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router,
  ) { }

  async createLoading(message) {
    const loading = await this.loadingController.create({
      message
    });
    return loading;
  }

  async createAlert(message) {
    const alert = await this.alertController.create({
      header: 'Fatapp diz:',
      message,
      buttons: ['Ok']
    });
    alert.present();
  }

  async createToast(message) {
    const toast = await this.toastController.create({
      header: 'Fatapp diz:',
      message,
      position: 'top',
      color: 'primary',
      duration: 3000,
    });
    toast.present();
  }

  navigateByUrl(url) {
    this.router.navigateByUrl(url);
  }
}
