import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListVideosPage } from './list-videos.page';
import { ScrollHideDirectiveModule } from 'src/app/directives/scroll-hide.directive';

const routes: Routes = [
  {
    path: '',
    component: ListVideosPage
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
  declarations: [ListVideosPage]
})
export class ListVideosPageModule {}
