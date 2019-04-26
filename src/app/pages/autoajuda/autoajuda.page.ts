import { AutoajudaService } from './../../services/autoajuda.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-autoajuda',
  templateUrl: './autoajuda.page.html',
  styleUrls: ['./autoajuda.page.scss'],
})
export class AutoajudaPage implements OnInit {
  posts: Post[] = [];

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };
  
  constructor(public loadingController: LoadingController, 
              private autoajudaService: AutoajudaService,
              private route: Router) {}

  async ngOnInit() {
    /* let timestamp = firebase.firestore.Timestamp.now().toDate();
    let p = new Post();
    p.ativo = false;
    p.titulo = "Como Ajuda Alguém";
    p.imagem = "";
    p.conteudo = `<p style="text-align: justify;">&nbsp;</p>
    <ul>
    <li>Dificuldade de aten&ccedil;&atilde;o e concentra&ccedil;&atilde;o;&nbsp;</li>
    <li>Dificuldade para relaxar e desacelerar os pensamentos;&nbsp;</li>
    <li>Falta de mem&oacute;ria;&nbsp;</li>
    <li>Mudan&ccedil;a de humor repentina;&nbsp;&nbsp;</li>
    <li>Irritabilidade;&nbsp;</li>
    <li>Cansa&ccedil;o mental que acaba se transformando em f&iacute;sico;&nbsp;</li>
    <li>Sofrimento por antecipa&ccedil;&atilde;o;&nbsp;&nbsp;</li>
    <li>M&aacute; qualidade do sono;&nbsp;&nbsp;</li>
    <li>Inquieta&ccedil;&atilde;o;&nbsp;</li>
    <li>Intoler&acirc;ncia ao ser contrariado.</li>
    </ul>
    <p>&nbsp;</p>`;
    p.publicadoEm = timestamp;
    this.autoajudaService.createPost(p); */

    const loading = await this.loadingController.create({
      message: 'carregando posts',
      showBackdrop: true
    });

    await loading.present();

    this.autoajudaService.getAllPosts().subscribe(async (data) => {
      this.posts = data.map(e => {

        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Post;
      }).sort((a: any, b: any) => {
        return a.publicadoEm > b.publicadoEm ? -1 : 1;
      });

      await loading.dismiss();
    }, async (error) => await loading.dismiss())
  }

  
  viewPost(post: Post){
    this.route.navigate(['/view-autoajuda', post.id])
  }
}
