import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutoajudaService } from 'src/app/services/autoajuda.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.page.html',
  styleUrls: ['./novo-post.page.scss'],
})
export class NovoPostPage implements OnInit {
  postForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public autoAjudaService: AutoajudaService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private route: Router) {
      this.postForm = this.formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(2)]],
        conteudo: ['', [Validators.required]],       
        imagem: [''] 
      });
     }

  ngOnInit() {
  }

  async savePost(){

    const loading = await this.loadingController.create({
      message: 'salvando',
      showBackdrop: true
    });
    await loading.present();

    let formPost = this.postForm.value as Post;

    let timestamp = firebase.firestore.Timestamp.now().toDate();

    formPost.publicadoEm = timestamp;
    formPost.ativo = true;
          
    if (this.postForm.valid) {
      this.autoAjudaService.createPost(formPost).then(async () => {
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
