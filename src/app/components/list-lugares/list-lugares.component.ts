import { Component, OnInit, NgModule } from '@angular/core';
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

  ngOnInit() {
    this.lugares = this.humorService.getLugares();
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