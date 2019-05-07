import { Questao } from './../models/questao';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { QuestaoResposta } from '../models/questao-resposta';

@Injectable({
  providedIn: 'root'
})
export class QuestoesService {

  constructor(private firestore: AngularFirestore,
    private firestoreStorage: AngularFireStorage) { }

    createQuestao(questao: Questao) {    
      const questaoJson = JSON.parse(JSON.stringify(questao));
      return this.firestore.collection('questoes').add(questaoJson);
    }

    getAllQuestoes() {
      return this.firestore.collection('questoes', ref => ref.where('status', '==', "Aprovada")).snapshotChanges();
    }

    getAllAdminQuestoes() {
      return this.firestore.collection('questoes').snapshotChanges();
    }

    getMinhasQuestoes(userId: string) {
      return this.firestore.collection('questoes', ref => ref.where('userId', '==', userId)).snapshotChanges();
    }
   

    getQuestao(id: string) {
      return new Promise((resolve, reject) => {
        this.firestore.collection("questoes").doc(id).valueChanges().subscribe((collection) => {
          if (collection) {
            resolve(collection); 
          }
        }, err => reject(err))
      })
    }

    getRespostas(questaoId: string){
      return this.firestore.collection('questaorespostas', ref => ref.where('questaoId', '==', questaoId)).snapshotChanges();
    }

    getRespostasByUserId(userId: string){
      return this.firestore.collection('questaorespostas', ref => ref.where('userId', '==', userId)).snapshotChanges();
    }

    createResposta(questaoResposta: QuestaoResposta) {    
      const questaorespostaJson = JSON.parse(JSON.stringify(questaoResposta));
      return this.firestore.collection('questaorespostas').add(questaorespostaJson);
    }
    
    updateQuestao(questao: Questao){
      //delete post.id;
      this.firestore.doc('questoes/' + questao.id).update(questao);
    }

    deleteQuestao(questaoId: string){
      
      return new Promise((resolve, reject) => {
        this.firestore.doc('questoes/' + questaoId).delete().then(() => {
          resolve()
        });
      })  
      
    }
}
