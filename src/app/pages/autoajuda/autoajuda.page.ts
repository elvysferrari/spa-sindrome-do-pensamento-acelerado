import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { AutoajudaService } from './../../services/autoajuda.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


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

      setTimeout(async () => {
        await loading.dismiss();
      }, 2000) 
    }, async (error) => await loading.dismiss())
  }

  
  viewPost(post: Post){
    this.route.navigate(['/view-autoajuda', post.id])
  }
}
