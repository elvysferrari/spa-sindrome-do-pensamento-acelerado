import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinhasQuestoesPage } from './minhas-questoes.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasQuestoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MinhasQuestoesPage]
})
export class MinhasQuestoesPageModule {}
