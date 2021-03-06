import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimelineHumorPage } from './timeline-humor.page';
import { ScrollHideDirectiveModule } from 'src/app/directives/scroll-hide.directive';

const routes: Routes = [
  {
    path: '',
    component: TimelineHumorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ScrollHideDirectiveModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimelineHumorPage]
})
export class TimelineHumorPageModule {}
