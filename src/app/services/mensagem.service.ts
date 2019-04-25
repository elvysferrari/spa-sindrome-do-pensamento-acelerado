import { Mensagem } from './../models/mensagem';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private firestore: AngularFirestore,
    private firestoreStorage: AngularFireStorage) { }

  getAllMensagens() {
    return this.firestore.collection('mensagens', ref => ref.orderBy('publicadoEm', "desc")).snapshotChanges();
  }

  createMensagem(mensagem: Mensagem) {    
    const mensagemJson = JSON.parse(JSON.stringify(mensagem));
    return this.firestore.collection('mensagens').add(mensagemJson);
  }
}
