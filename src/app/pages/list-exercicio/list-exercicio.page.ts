import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exercicio',
  templateUrl: './list-exercicio.page.html',
  styleUrls: ['./list-exercicio.page.scss'],
})
export class ListExercicioPage implements OnInit {

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
