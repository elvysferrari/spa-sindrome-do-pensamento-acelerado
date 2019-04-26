import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SintomasPage } from './sintomas.page';
import { SanitizeOffPipeModule } from 'src/app/pipes/noSanitize.pipe';
import { ScrollHideDirectiveModule } from 'src/app/directives/scroll-hide.directive';

const routes: Routes = [
  {
    path: '',
    component: SintomasPage
  }
];

@NgModule({
  imports: [
    ScrollHideDirectiveModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SanitizeOffPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SintomasPage]
})
export class SintomasPageModule {}
