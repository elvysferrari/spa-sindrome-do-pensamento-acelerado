import { HumorService } from './../../services/humor.service';
import { Humor } from './../../models/humor';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-novo-humor',
  templateUrl: './novo-humor.page.html',
  styleUrls: ['./novo-humor.page.scss'],
})
export class NovoHumorPage implements OnInit {
  lugar: any;
  sentimento: any;
  pensamento: string = "";

  user: User;
  
  constructor(private userService: UserService, 
              private humorService: HumorService,
              private route: Router,
              public loadingController: LoadingController,
              public toastController: ToastController) { }

  ngOnInit() {
    this.userService.getLogged().subscribe((user: User) => {
      this.user = user;
    })
  }

  onClickLugar(evt){  
    this.lugar = evt;
  }

  onClickSentimento(evt){
    
    this.sentimento = evt;
  }

  async submitHumor(){
    const loading = await this.loadingController.create({
      message: 'salvando',
      showBackdrop: true
    });
    await loading.present();

    let timestamp = firebase.firestore.Timestamp.now().toDate(); 

    let humor = new Humor();
    humor.lugar = this.lugar;
    humor.sentimento = this.sentimento;
    humor.pensamento = this.pensamento;
    humor.publicadoEm = timestamp;
    humor.userId = this.user.id;

    this.humorService.createHumor(humor).then(async () => {
      await loading.dismiss();
      this.route.navigate(['home'])
    }).catch(async (err) => {
      await loading.dismiss();
      this.route.navigate(['home'])

      const toast = await this.toastController.create({
        message: err,
        position: 'top',
        duration: 2000
      });
      toast.present();
    });
  }
}
