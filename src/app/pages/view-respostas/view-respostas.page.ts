import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { QuestoesService } from 'src/app/services/questoes.service';
import { QuestaoResposta } from 'src/app/models/questao-resposta';

@Component({
  selector: 'app-view-respostas',
  templateUrl: './view-respostas.page.html',
  styleUrls: ['./view-respostas.page.scss'],
})
export class ViewRespostasPage implements OnInit {
  respostas: QuestaoResposta[] = [];
  questaoId: string;
  user: User;

  constructor(private route: ActivatedRoute,
    public loadingController: LoadingController,
    private userService: UserService,
    private questaoService: QuestoesService) { 
    this.questaoId = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.userService.getLogged().subscribe((user: User) => {
      this.user = user;
    })

    const loading = await this.loadingController.create({
      message: 'carregando',
      showBackdrop: true
    });
    await loading.present();
    this.questaoService.getRespostas(this.questaoId).subscribe(async (data) => {
      this.respostas = data.map(e => {     
           
        return {
          id: e.payload.doc.id,          
          ...e.payload.doc.data()
        } as QuestaoResposta;
      }).sort((a: any, b: any) => {
        return a.respondidaEm > b.respondidaEm ? -1 : 1;
      });
      
      await loading.dismiss();  
    })
   
  }

}
