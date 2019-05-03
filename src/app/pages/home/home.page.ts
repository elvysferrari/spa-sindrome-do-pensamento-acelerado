import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstLogin: boolean = false;
  user: User;
  
  constructor(private storage: Storage, 
              private route: Router,
              private userService: UserService){
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
    this.userService.getLogged().subscribe((user: User) => {
      this.user = user;
    })
  }

  continuar(){
    this.firstLogin = false;
    this.storage.set('firstLogin', false);
  }

  navigateTo(url) { 
    if(url == "/novo-humor"){
      if(this.user){
        this.route.navigate([url]) 
      }else{
        this.route.navigate(['/login'])
      }
    }else{
      this.route.navigate([url])    
    }
  }
}
