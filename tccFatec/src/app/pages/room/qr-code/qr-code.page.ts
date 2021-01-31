import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FatappCoreService } from 'src/app/services/fatapp-core/fatapp-core-service.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { NavController } from '@ionic/angular';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage {

  public imgVar: string = null;
  public activity = null;

  constructor(
    private route: ActivatedRoute,
    private apiCore: FatappCoreService,
    private global: GlobalsService,
    private navController: NavController,
    private tools: ToolsService,
  ) {
  }

  ionViewDidEnter() {
    this.getQrCode();
  }

  async getQrCode() {
    try {
      const loading = await this.global.createLoading('Carregando QR Code');
      loading.present();
      if (this.route.snapshot.queryParams.id) {
        const id = await this.route.snapshot.queryParams.id;
        this.activity = await this.apiCore.getActivity(id);
        if (!this.activity || this.activity === undefined || this.activity === '') {
          this.global.createAlert('Erro ao gerar QrCode');
          loading.dismiss();
          this.navController.back();
        } else {
          let formatedInitialTime = await this.tools.formatFrontDate(this.activity.initialDate);
          let formatedFinalTime = await this.tools.formatFrontTimeDate(this.activity.finalDate);
          let formatedTime = {
            formatedInitialTime,
            formatedFinalTime,
          };
          Object.assign(this.activity, formatedTime);
          this.imgVar = environment.apiCoreUrl + 'files/' + this.activity.qrCode;
        }

        loading.dismiss();
      }

    } catch (error) {
      console.log(error);
    }
  }

}
