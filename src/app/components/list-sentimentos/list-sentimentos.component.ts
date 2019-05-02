import { HumorService } from './../../services/humor.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-sentimentos',
  templateUrl: './list-sentimentos.component.html',
  styleUrls: ['./list-sentimentos.component.scss'],
})
export class ListSentimentosComponent implements OnInit {
  sentimentos: any[];
  constructor(private humorService: HumorService) { }

  ngOnInit() {
    this.sentimentos = this.humorService.getSentimentos();
  }

}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    ListSentimentosComponent
  ],
  declarations: [
    ListSentimentosComponent,
  ],
  providers: [],
})
export class ListSentimentosModule { }