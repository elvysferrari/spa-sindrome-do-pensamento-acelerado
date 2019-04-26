import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video';
import { LoadingController } from '@ionic/angular';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.page.html',
  styleUrls: ['./list-videos.page.scss'],
})
export class ListVideosPage implements OnInit {
  customPopoverOptions: any = {
    header: 'Categorias',
    //subHeader: 'Selecione uma categoria',
    //message: 'Selecione uma categoria'
  };
  
  videos: Video[] = [];

  
  trustedVideoUrl: SafeResourceUrl;
  videosFiltered: any;  
  categorias: any[] = [];

  constructor(public loadingController: LoadingController,
              public videoService: VideosService,
              private domSanitizer: DomSanitizer) {   
              
              this.categorias = this.videoService.getCategorias();   
   }

  async ngOnInit() {    
    const loading = await this.loadingController.create({
      message: 'carregando vídeos',
      showBackdrop: true
    });
    await loading.present();

    this.videoService.getAllVideos().subscribe(async (data) => {
      this.videos = data.map(e => {

        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Video;
      });

      for(let i of this.videos){
        i.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.vid_link);
      }
      this.videosFiltered = this.videos;
      await loading.dismiss();

    }, async (error) => await loading.dismiss())     
  }

  changeCategoria(evt){
    if(evt.detail.value){
      if(evt.detail.value == "Todas"){
        this.videosFiltered = this.videos;
      }else{
        this.videosFiltered = this.videos.filter(x => x.categoria == evt.detail.value)
      }
      
    }
  }

}
