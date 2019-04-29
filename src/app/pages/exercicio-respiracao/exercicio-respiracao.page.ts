import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-respiracao',
  templateUrl: './exercicio-respiracao.page.html',
  styleUrls: ['./exercicio-respiracao.page.scss'],
})
export class ExercicioRespiracaoPage implements OnInit {
  message = "Se prepare!";
  
  constructor() { 
    setInterval(() => {
      if(this.message != "Inspire!"){
        this.message = "Inspire!"
      }else{
        this.message = "Expire!"
      }
    }, 4000)
  }

  ngOnInit() {
  }

}
