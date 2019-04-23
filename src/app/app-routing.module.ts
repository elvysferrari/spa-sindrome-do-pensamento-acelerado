import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'minha-conta', loadChildren: './pages/minha-conta/minha-conta.module#MinhaContaPageModule' },
  { path: 'questoes', loadChildren: './pages/questoes/questoes.module#QuestoesPageModule' },
  { path: 'minhas-questoes', loadChildren: './pages/minhas-questoes/minhas-questoes.module#MinhasQuestoesPageModule' },
  { path: 'view-respostas/:id', loadChildren: './pages/view-respostas/view-respostas.module#ViewRespostasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
