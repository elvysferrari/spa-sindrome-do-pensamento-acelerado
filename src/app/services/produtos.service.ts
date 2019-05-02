import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore: AngularFirestore) { }


  getAllProdutos() {
    return this.firestore.collection('produtos', ref => ref.where('ativo', '==', true)).snapshotChanges();
  }
}
