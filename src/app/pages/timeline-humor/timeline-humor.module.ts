import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimelineHumorPage } from './timeline-humor.page';

const routes: Routes = [
  {
    path: '',
    component: TimelineHumorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimelineHumorPage]
})
export class TimelineHumorPageModule {}
