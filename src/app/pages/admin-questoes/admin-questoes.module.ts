import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminQuestoesPage } from './admin-questoes.page';

const routes: Routes = [
  {
    path: '',
    component: AdminQuestoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminQuestoesPage]
})
export class AdminQuestoesPageModule {}
