import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AutoajudaService {

  constructor(private firestore: AngularFirestore,
    private firestoreStorage: AngularFireStorage) { }
  
  getAllPosts() {
    return this.firestore.collection('posts', ref => ref.where('ativo', '==', true)).snapshotChanges();
  }

  createPost(post: Post) {    
    const postJson = JSON.parse(JSON.stringify(post));
    return this.firestore.collection('posts').add(postJson);
  }
  
  getPost(id: string) {
    return new Promise((resolve, reject) => {
      this.firestore.collection("posts").doc(id).valueChanges().subscribe((collection) => {
        if (collection) {
          resolve(collection);
        }
      }, err => reject(err))
    })
  }
}
