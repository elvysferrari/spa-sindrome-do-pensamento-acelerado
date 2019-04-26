import { Video } from './../../models/video';
import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-video',
  templateUrl: './novo-video.page.html',
  styleUrls: ['./novo-video.page.scss'],
})
export class NovoVideoPage implements OnInit {

  videoForm: FormGroup;
  categorias: any[] = [];
  constructor(public formBuilder: FormBuilder,
    public videoService: VideosService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private route: Router) {
    this.videoForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['', [Validators.required]],
      vid_link: ['', [Validators.required]],
    });

    this.categorias = this.videoService.getCategorias();
  }

  ngOnInit() {
  }

  async onSubmit() {
    const loading = await this.loadingController.create({
      message: 'salvando',
      showBackdrop: true
    });
    await loading.present();


    let formVideo = this.videoForm.value as Video;

    let timestamp = firebase.firestore.Timestamp.now().toDate();
    formVideo.publicadoEm = timestamp;
    formVideo.vid_link = formVideo.vid_link.replace('watch?v=', 'embed/')
    if (this.videoForm.valid) {
      this.videoService.createVideo(formVideo).then(async (ret) => {
        await loading.dismiss();
        this.route.navigate(['admin'])
      }).catch(async (err) => {
        await loading.dismiss();
        this.route.navigate(['admin'])

        const toast = await this.toastController.create({
          message: err,
          position: 'top',
          duration: 2000
        });
        toast.present();
      })
    }
  }

}
