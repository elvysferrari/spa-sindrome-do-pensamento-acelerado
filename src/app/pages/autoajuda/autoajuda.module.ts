import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutoajudaPage } from './autoajuda.page';
import { ScrollHideDirectiveModule } from 'src/app/directives/scroll-hide.directive';

const routes: Routes = [
  {
    path: '',
    component: AutoajudaPage
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
  declarations: [AutoajudaPage]
})
export class AutoajudaPageModule {}
