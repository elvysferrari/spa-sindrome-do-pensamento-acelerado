import { MensagemService } from './../../services/mensagem.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, LoadingController, Platform, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, PictureSourceType, CameraOptions, DestinationType } from '@ionic-native/Camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx'
import { WebView } from '@ionic-native/ionic-webview/ngx';
import * as firebase from 'firebase/app';
import { Mensagem } from 'src/app/models/mensagem';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-nova-mensagem',
  templateUrl: './nova-mensagem.page.html',
  styleUrls: ['./nova-mensagem.page.scss'],
})
export class NovaMensagemPage implements OnInit {

  mensagemForm: FormGroup;
  maxImages: number = 1;
  qualityImages: number = 90;

  imageResponse: any = [];;
  options: any;

  ref: any;
  task: any;
  uploadProgress: number = 0;
  files: any[] = [];
  filePaths: string[] = [];
  mensagem: Mensagem;
  filesTranferreds: string[] = [];
  images: ImgModel[] = [];

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
  constructor(private mensagemService: MensagemService,
              private afStorage: AngularFireStorage,
              public formBuilder: FormBuilder,
              private _sanitizer: DomSanitizer,
              public toastController: ToastController,
              public loadingController: LoadingController,
              private route: Router,
              private imagePicker: ImagePicker,
              private file: File,
              private filePath: FilePath,
              private platform: Platform,
              private camera: Camera,
              private webview: WebView,
              public actionSheetController: ActionSheetController,
              private changeRef: ChangeDetectorRef) {
                this.mensagemForm = this.formBuilder.group({
                  titulo: ['', [Validators.required, Validators.minLength(2)]],
                  conteudo: ['', [Validators.required]],                  
                });
               }

  ngOnInit() {
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      let filePath = this.file.dataDirectory + newFileName;
      let resPath = this.pathForImage(filePath);
      this.images.unshift({ name: newFileName, url: resPath, file: filePath });
      this.changeRef.detectChanges();
    }, error => {
      
    });
  }
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: this.qualityImages,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: DestinationType.FILE_URL
    };


    this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }

    });

  }

  openCam() {
    this.takePicture(this.camera.PictureSourceType.CAMERA);
  }

  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }


  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: (this.maxImages - this.images.length),

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 480,
      
      //height: 200,

      // quality of resized image, defaults to 100
      quality: this.qualityImages,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 0
    };

    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        var currentName = results[i].substr(results[i].lastIndexOf('/') + 1);
        var correctPath = results[i].substr(0, results[i].lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

        //this.imageResponse.push(results[i]);
      }
    }, (err) => {
      
    });
  }
  removePicture(img: ImgModel) {
    let index = this.images.find(x => x.name == img.name);
    this.images.splice(this.images.indexOf(index), 1);
  }

  upload(event, id) {
    let src = URL.createObjectURL(event.target.files[0])
    this.images[id].url = src;
    this.images[id].file = event.target.files[0]
  }

  startUpload(imgEntry) {
    return new Promise<Blob>(async (resolve, reject) => {
      this.file.resolveLocalFilesystemUrl(imgEntry.file)
        .then(entry => {
          (<FileEntry>entry).file(file => this.readFile(file).then((blob) => {
            resolve(blob)
          }))
        })
        .catch(err => {
          reject(undefined)
        });
    })

  }

  readFile(file: any) {
    return new Promise<Blob>(async (resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgBlob = new Blob([reader.result], {
          type: file.type
        });
        resolve(imgBlob)
      };
      reader.readAsArrayBuffer(file);
    })
  }

  async uploadFirebase() {
    return new Promise<boolean>(async (resolve, reject) => {
      let index = 1;
      this.images.forEach(async (img: ImgModel) => {

        if (img.file != undefined) {

          await this.startUpload(img).then(async (imageFile: Blob) => {
            const randomId = Math.random().toString(36).substring(2);
            this.filePaths.push(randomId);
            this.ref = this.afStorage.ref(randomId);
            this.task = this.ref.put(imageFile);
            await this.task.snapshotChanges().subscribe(a => {
              if (a.bytesTransferred == a.totalBytes) {
                this.filesTranferreds.push(a.ref.fullPath)
              }
              img["progress"] = (a.bytesTransferred / a.totalBytes) * 100;
              this.uploadProgress = (a.bytesTransferred / a.totalBytes) * 100;

            });
            if(this.images.length == index){
              setTimeout(()=> {
                resolve(true)
              }, 3000)
            }else{
              index++;
            }
          });
        }

      })


    })
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustUrl(`${image}`);
  }

  async selectPhotoType() {
    if (this.images.length < this.maxImages) {
      const actionSheet = await this.actionSheetController.create({
        header: 'Escolha as imagens',
        buttons: [{
          text: 'Tirar Foto',
          icon: 'camera',
          handler: () => {
            this.openCam()
          }
        }, {
          text: 'Galeria',
          icon: 'images',
          handler: () => {
            this.getImages();
          }
        }, {
          text: 'Fechar',
          icon: 'close',
          role: 'cancel',
          handler: () => {

          }
        }]
      });
      await actionSheet.present();
    } else {
      const toast = await this.toastController.create({
        message: "Número máx. de fotos atingido.",
        position: 'top',
        duration: 3000
      });
      toast.present();
    }

  }

  async onSubmit() {
    const loading = await this.loadingController.create({
      message: 'salvando',
      showBackdrop: true
    });
    await loading.present();

    if(this.images.length > 0){
      await this.uploadFirebase();
    }

    let formMensagem = this.mensagemForm.value as Mensagem;

    this.afStorage.ref(this.filePaths[0]).getDownloadURL().subscribe((value => {
      formMensagem.imagem = value;     
      
      let timestamp = firebase.firestore.Timestamp.now().toDate(); 
      formMensagem.publicadoEm = timestamp;

      if (this.mensagemForm.valid) {
        this.mensagemService.createMensagem(formMensagem).then(async (ret) => {
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
    }))

    
  
    

    


  }
}
export class ImgModel {
  url: string;
  name: string;
  file: string;
}
