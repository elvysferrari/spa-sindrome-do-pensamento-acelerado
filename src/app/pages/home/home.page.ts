import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstLogin: boolean = false;

  constructor(private storage: Storage, private route: Router){
    /* storage.get('firstLogin').then((r) => {     
      if(r == null) 
      {
        this.firstLogin = true;
      }
      else{
        if(r == false){
          this.firstLogin = false;
        } else{
          this.firstLogin = true;
        }       
      }
    }) */
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  continuar(){
    this.firstLogin = false;
    this.storage.set('firstLogin', false);
  }

  navigateTo(url) { 
    this.route.navigate([url])    
  }
}
