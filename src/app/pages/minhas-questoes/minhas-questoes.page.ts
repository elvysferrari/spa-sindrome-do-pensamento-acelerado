import { User } from 'src/app/models/user';
import { Questao } from './../../models/questao';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { QuestoesService } from 'src/app/services/questoes.service';
import * as firebase from 'firebase/app';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minhas-questoes',
  templateUrl: './minhas-questoes.page.html',
  styleUrls: ['./minhas-questoes.page.scss'],
})
export class MinhasQuestoesPage implements OnInit {
  questoes: Questao[] = [];
  user: User;
  constructor(private alertController: AlertController,
              private questaoService: QuestoesService,
              private userService: UserService,
              public toastController: ToastController,
              public loadingController: LoadingController,
              private route: Router) { 

                this.userService.getLogged().subscribe((user: User) => {
                  this.user = user;
                }) 
              }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'carregando',
      showBackdrop: true
    });
    await loading.present();

    this.questaoService.getMinhasQuestoes(this.user.id).subscribe(async (data) => {
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
  }

  viewRespostas(questao: Questao){
    this.route.navigate(['/view-respostas', questao.id])
  }

  async sendPergunta(){
    const alert = await this.alertController.create({
      header: 'Insira a pergunta!',
      inputs: [
        {
          name: 'pergunta',
          type: 'text',
          placeholder: 'Perguntar...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: (r) => {            
            this.submitPergunta(r);
            //enviar msg
          }
        }
      ]
    });

    await alert.present();
  }

  async submitPergunta(pergunta){
    const loading = await this.loadingController.create({
      message: 'enviando',
      showBackdrop: true
    });
    await loading.present();

    let timestamp = firebase.firestore.Timestamp.now().toDate(); 
    let questao : Questao = new Questao();
    questao.titulo = pergunta.pergunta;
    questao.publicadaEm = timestamp;
    questao.userId = this.user.id;
    questao.userName = this.user.name;
    questao.status = "Aguardando aprovação";

    this.questaoService.createQuestao(questao).then(async () => {
      await loading.dismiss();
    }).catch(async (err) => {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: err,
        position: 'top',
        duration: 2000
      });
      toast.present();
    })
  }
}
