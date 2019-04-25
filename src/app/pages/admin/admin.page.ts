import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  navigateTo(url: string){
    this.route.navigate([url])
  }
  
}
