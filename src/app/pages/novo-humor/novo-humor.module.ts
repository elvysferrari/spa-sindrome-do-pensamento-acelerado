import { ListSentimentosModule } from './../../components/list-sentimentos/list-sentimentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoHumorPage } from './novo-humor.page';
import { ListLugaresModule } from 'src/app/components/list-lugares/list-lugares.component';

const routes: Routes = [
  {
    path: '',
    component: NovoHumorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSentimentosModule,
    ListLugaresModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoHumorPage]
})
export class NovoHumorPageModule {}
