import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListMensagemPage } from './list-mensagem.page';
import { ScrollHideDirectiveModule } from 'src/app/directives/scroll-hide.directive';


const routes: Routes = [
  {
    path: '',
    component: ListMensagemPage
  }
];

@NgModule({
  imports: [
    ScrollHideDirectiveModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListMensagemPage]
})
export class ListMensagemPageModule {}
