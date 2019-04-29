import { AutoajudaService } from './../../services/autoajuda.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-view-autoajuda',
  templateUrl: './view-autoajuda.page.html',
  styleUrls: ['./view-autoajuda.page.scss'],
})
export class ViewAutoajudaPage implements OnInit {
  post: Post;
  postId: string;
  
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };
  
  constructor(private route: ActivatedRoute,
              public loadingController: LoadingController,
              public autoAjudaService: AutoajudaService) {
                this.postId = this.route.snapshot.paramMap.get('id');
               }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'carregando',
      showBackdrop: true
    });
    await loading.present();
    this.autoAjudaService.getPost(this.postId).then(async (post: Post) => {
      this.post = post;
      this.post.id = this.postId;
      console.log(this.post)
      await loading.dismiss();  
    }).catch( async(err) => { await loading.dismiss(); })

  }

}
