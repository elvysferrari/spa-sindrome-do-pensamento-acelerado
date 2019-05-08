import { Humor } from './../../models/humor';
import { Component, OnInit } from '@angular/core';
import { HumorService } from 'src/app/services/humor.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-timeline-humor',
  templateUrl: './timeline-humor.page.html',
  styleUrls: ['./timeline-humor.page.scss'],
})
export class TimelineHumorPage implements OnInit {
  humores: Humor[] = [];
  user: User;

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };
  
  constructor(private userService: UserService,
    private humorService: HumorService,
    public alertController: AlertController,
    private loadingController: LoadingController) {
    this.userService.getLogged().subscribe((user: User) => {
      this.user = user;
    })
  }

  async ngOnInit() {
    if (this.user) {
      const loading = await this.loadingController.create({
        message: 'carregando humores',
        showBackdrop: true
      });
      await loading.present();

      this.humorService.getHumoresByUserId(this.user.id).subscribe(async (data) => {
        this.humores = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Humor;
        }).sort((a: any, b: any) => {
          return a.publicadoEm > b.publicadoEm ? -1 : 1;
        });

        await loading.dismiss();
      }, async (error) => await loading.dismiss())
    }
  }

  async deleteHumor(humor: Humor){
    const alert = await this.alertController.create({
      header: 'Excluir humor',
      message: 'Tem certeza que deseja excluir?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Sim',
          handler: () => {
            this.humorService.deleteHumor(humor.id);
          }
        }
      ]
    });

    await alert.present();


    
  }

}
