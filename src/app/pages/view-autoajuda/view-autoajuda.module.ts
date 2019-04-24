import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewAutoajudaPage } from './view-autoajuda.page';
import { SanitizeOffPipeModule } from 'src/app/pipes/noSanitize.pipe';

const routes: Routes = [
  {
    path: '',
    component: ViewAutoajudaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanitizeOffPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAutoajudaPage]
})
export class ViewAutoajudaPageModule {}
