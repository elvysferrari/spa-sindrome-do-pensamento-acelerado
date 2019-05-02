import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore: AngularFirestore) { }


  getAllProdutos() {
    return this.firestore.collection('produtos', ref => ref.where('ativo', '==', true)).snapshotChanges();
  }

  createProduto(produto: Produto) {    
    const produtoJson = JSON.parse(JSON.stringify(produto));
    return this.firestore.collection('produtos').add(produtoJson);
  }
}
