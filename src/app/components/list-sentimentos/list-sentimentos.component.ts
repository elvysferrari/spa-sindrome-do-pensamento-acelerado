import { HumorService } from './../../services/humor.service';
import { Component, OnInit, NgModule, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
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
  constructor(private humorService: HumorService, private ref: ChangeDetectorRef) { }

  @Output() onClick = new EventEmitter();
  
  ngOnInit() {
    this.sentimentos = this.humorService.getSentimentos();
  }

  checkItem(sentimento){
    if(sentimento.checked){
      delete sentimento.checked;
      this.onClick.emit(undefined);
    }else{
      sentimento.checked = true;
      let item = this.sentimentos.find(x => x.nome != sentimento.nome && x.checked != undefined);
      if(item){
        delete item.checked;        
      }

      this.onClick.emit(sentimento);
    }
    
    //this.ref.detectChanges();
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