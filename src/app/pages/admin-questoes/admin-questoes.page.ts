import { Component, OnInit } from '@angular/core';
import { QuestoesService } from 'src/app/services/questoes.service';
import { Questao } from 'src/app/models/questao';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-questoes',
  templateUrl: './admin-questoes.page.html',
  styleUrls: ['./admin-questoes.page.scss'],
})
export class AdminQuestoesPage implements OnInit {
  questoes: Questao[] = [];
  constructor(private questaoService: QuestoesService,
              public loadingController: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'carregando perguntas',
      showBackdrop: true
    });
    await loading.present();

    this.questaoService.getAllAdminQuestoes().subscribe(async (data) => {
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

  aprovar(questao: Questao){
    questao.status = "Aprovada";
    this.questaoService.updateQuestao(questao);
  }

  encerrar(questao: Questao){
    questao.status = "Encerrada";
    this.questaoService.updateQuestao(questao);
  }

  excluir(questao: Questao){
      this.questaoService.deleteQuestao(questao.id);
  }
}
