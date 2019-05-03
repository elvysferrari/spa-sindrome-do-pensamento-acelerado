import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HumorService } from 'src/app/services/humor.service';

@Component({
  selector: 'app-list-lugares',
  templateUrl: './list-lugares.component.html',
  styleUrls: ['./list-lugares.component.scss'],
})
export class ListLugaresComponent implements OnInit {
  lugares: any[];
  constructor(private humorService: HumorService) { }

  @Output() onClick = new EventEmitter();
  
  ngOnInit() {
    this.lugares = this.humorService.getLugares();
  }

  checkItem(lugar){    
    if(lugar.checked){      
      delete lugar.checked;
      this.onClick.emit(undefined);
    }else{
      lugar.checked = true;
      
      let item = this.lugares.find(x => x.nome != lugar.nome && x.checked != undefined);
      if(item){
        delete item.checked;        
      }
      this.onClick.emit(lugar);
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
    ListLugaresComponent
  ],
  declarations: [
    ListLugaresComponent,
  ],
  providers: [],
})
export class ListLugaresModule { }