import { Video } from './../models/video';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
 
  constructor(private firestore: AngularFirestore) { }

  getAllVideos() {
    return this.firestore.collection('videos', ref => ref.orderBy('publicadoEm', "desc")).snapshotChanges();
  }

  createVideo(video: Video) {    
    const videoJson = JSON.parse(JSON.stringify(video));
    return this.firestore.collection('videos').add(videoJson);
  }

  getCategorias(){
    
    return [{
      nome: 'Todas',
      sortOrder: 1
    },{
      nome: 'Motivacional',
      sortOrder: 5
    },{
      nome: 'Meditação',
      sortOrder: 4
    },{
      nome: 'Auto Ajuda',
      sortOrder: 3
    },{
      nome: 'Ansiedade',
      sortOrder: 2
    },{
      nome: 'Reflexões',
      sortOrder: 6
    },{
      nome: 'Diversos',
      sortOrder: 7
    },{
      nome: 'Treinamentos',
      sortOrder: 8
    },{
      nome: 'Religiosos',
      sortOrder: 9
    },{
      nome: 'Testes',
      sortOrder: 10
    }].sort((a: any, b: any) => {
      return a.sortOrder < b.sortOrder ? -1 : 1;
    });
  }
}
