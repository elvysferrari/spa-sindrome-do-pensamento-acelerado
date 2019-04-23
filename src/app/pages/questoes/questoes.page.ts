import { User } from 'src/app/models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Questao } from 'src/app/models/questao';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { QuestoesService } from 'src/app/services/questoes.service';
import * as firebase from 'firebase/app';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
})
export class QuestoesPage implements OnInit {
  @ViewChild('slide') slide;


  questoes: Questao[] = [];
  user: User;
  resposta = '';
  slideOpts = {
    effect: 'flip'
  };

  constructor(private alertController: AlertController,
    private questaoService: QuestoesService,
    private userService: UserService,
    public toastController: ToastController,
    public loadingController: LoadingController) {
      this.userService.getLogged().subscribe((user: User) => {
        this.user = user;
      }) 
     }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'carregando perguntas',
      showBackdrop: true
    });

    await loading.present();
  /*   this.questaoService.getAllQuestoes().subscribe(async (data) => {
      this.questoes = data.map(e => {     
           
        return {
          id: e.payload.doc.id,          
          ...e.payload.doc.data()
        } as Questao;
      }).filter(x => x.userId != this.user.id && x.status != "Aguardando aprovação").sort((a: any, b: any) => {
        return a.publicadaEm > b.publicadaEm ? -1 : 1;
      });
      
      await loading.dismiss();  
    }) */
    this.questaoService.getAllQuestoes().subscribe(async (data) => {
      this.questoes = data.map(e => {     
           
        return {
          id: e.payload.doc.id,          
          ...e.payload.doc.data()
        } as Questao;
      }).sort((a: any, b: any) => {
        return a.publicadaEm > b.publicadaEm ? -1 : 1;
      });
      
      await loading.dismiss();  
    })

    this.slide.lockSwipes(true);
  }

  nextSlide(){
    this.slide.lockSwipes(false)
    this.slide.slideNext();  
    this.slide.lockSwipes(true);
  }

  sendResposta(){
    this.slide.lockSwipes(false)
    this.slide.slideNext();  
    this.slide.lockSwipes(true);
  }

  sliderEnd(evt){

  }

}
