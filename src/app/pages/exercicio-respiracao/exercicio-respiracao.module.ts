import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExercicioRespiracaoPage } from './exercicio-respiracao.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioRespiracaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExercicioRespiracaoPage]
})
export class ExercicioRespiracaoPageModule {}
