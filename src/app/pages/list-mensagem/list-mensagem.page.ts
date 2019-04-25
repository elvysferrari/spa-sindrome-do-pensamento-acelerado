import { MensagemService } from './../../services/mensagem.service';
import { Mensagem } from './../../models/mensagem';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-list-mensagem',
  templateUrl: './list-mensagem.page.html',
  styleUrls: ['./list-mensagem.page.scss'],
})
export class ListMensagemPage implements OnInit {
  mensagens: Mensagem[] = [];
  

  constructor(public loadingController: LoadingController,
              private mensagemService: MensagemService) { }

  async ngOnInit() {

    const loading = await this.loadingController.create({
      message: 'carregando posts',
      showBackdrop: true
    });
    await loading.present();

    this.mensagemService.getAllMensagens().subscribe(async (data) => {
      this.mensagens = data.map(e => {

        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Mensagem;
      });

      await loading.dismiss();
    }, async (error) => await loading.dismiss()) 

  }

}
