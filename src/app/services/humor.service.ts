import { Injectable } from '@angular/core';
import { Humor } from '../models/humor';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class HumorService {

  constructor(private firestore: AngularFirestore) { }

  createHumor(humor: Humor){
    const humorJson = JSON.parse(JSON.stringify(humor));
    return this.firestore.collection('humores').add(humorJson);
  }


  getLugares() {
    return [{
      nome: 'no trabalho',
      icon: 'assets/icon/emoticons/trabalho.png'
    }, {
      nome: 'em casa',
      icon: 'assets/icon/emoticons/casa.png'
    }, {
      nome: 'na rua',
      icon: 'assets/icon/emoticons/rua.png'
    }, {
      nome: 'no carro',
      icon: 'assets/icon/emoticons/carro.png'
    }, {
      nome: 'no hospital',
      icon: 'assets/icon/emoticons/hospital.png'
    }, {
      nome: 'no salão',
      icon: 'assets/icon/emoticons/salao.png'
    }, {
      nome: 'no restaurante',
      icon: 'assets/icon/emoticons/restaurante.png'
    }, {
      nome: 'na farmácia',
      icon: 'assets/icon/emoticons/farmacia.png'
    }, {
      nome: 'no mercado',
      icon: 'assets/icon/emoticons/mercado.png'
    }, {
      nome: 'outro',
      icon: 'assets/icon/emoticons/outrolugar.png'
    }]
  }


  getSentimentos() {
    return [{
      nome: 'feliz',
      icon: 'assets/icon/emoticons/feliz.png'
    }, {
      nome: 'muito feliz',
      icon: 'assets/icon/emoticons/muitofeliz.png'
    }, {
      nome: 'maravilhoso',
      icon: 'assets/icon/emoticons/maravilhoso.png'
    }, {
      nome: 'legal',
      icon: 'assets/icon/emoticons/feliz.png'
    }, {
      nome: 'alegre',
      icon: 'assets/icon/emoticons/maravilhoso.png'
    }, {
      nome: 'animado',
      icon: 'assets/icon/emoticons/animado.png'
    }, {
      nome: 'adorável',
      icon: 'assets/icon/emoticons/adoravel.png'
    }, {
      nome: 'agradecido',
      icon: 'assets/icon/emoticons/agradecido.png'
    }, {
      nome: 'grato',
      icon: 'assets/icon/emoticons/grato.png'
    }, {
      nome: 'divertido',
      icon: 'assets/icon/emoticons/feliz.png'
    }, {
      nome: 'positivo',
      icon: 'assets/icon/emoticons/positivo.png'
    }, {
      nome: 'tranquilo',
      icon: 'assets/icon/emoticons/positivo.png'
    }, {
      nome: 'esperançoso',
      icon: 'assets/icon/emoticons/esperancoso.png'
    }, {
      nome: 'motivado',
      icon: 'assets/icon/emoticons/motivado.png'
    }, {
      nome: 'ok',
      icon: 'assets/icon/emoticons/ok.png'
    }, {
      nome: 'pensativo',
      icon: 'assets/icon/emoticons/pensativo.png'
    }, {
      nome: 'ansioso',
      icon: 'assets/icon/emoticons/ansioso.png'
    }, {
      nome: 'esgotado',
      icon: 'assets/icon/emoticons/esgotado.png'
    }, {
      nome: 'exausto',
      icon: 'assets/icon/emoticons/exausto.png'
    }, {
      nome: 'sentimental',
      icon: 'assets/icon/emoticons/sentimental.png'
    }, {
      nome: 'triste',
      icon: 'assets/icon/emoticons/triste.png'
    }, {
      nome: 'muito triste',
      icon: 'assets/icon/emoticons/muitotriste.png'
    }, {
      nome: 'incomodado',
      icon: 'assets/icon/emoticons/incomodado.png'
    }, {
      nome: 'angustiado',
      icon: 'assets/icon/emoticons/angustiado.png'
    }, {
      nome: 'decepcionado',
      icon: 'assets/icon/emoticons/triste.png'
    }, {
      nome: 'preocupado',
      icon: 'assets/icon/emoticons/preocupado.png'
    }, {
      nome: 'confuso',
      icon: 'assets/icon/emoticons/confuso.png'
    }, {
      nome: 'irritado',
      icon: 'assets/icon/emoticons/incomodado.png'
    }, {
      nome: 'de saco cheio',
      icon: 'assets/icon/emoticons/angustiado.png'
    }, {
      nome: 'culpado',
      icon: 'assets/icon/emoticons/triste.png'
    }, {
      nome: 'horrível',
      icon: 'assets/icon/emoticons/incomodado.png'
    }, {
      nome: 'magoado',
      icon: 'assets/icon/emoticons/angustiado.png'
    }, {
      nome: 'furioso',
      icon: 'assets/icon/emoticons/furioso.png'
    }, {
      nome: 'com raiva',
      icon: 'assets/icon/emoticons/incomodado.png'
    }, {
      nome: 'estressado',
      icon: 'assets/icon/emoticons/furioso.png'
    }, {
      nome: 'solitário',
      icon: 'assets/icon/emoticons/solitario.png'
    }]
  }
}
