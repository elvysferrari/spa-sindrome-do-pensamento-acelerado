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
  { path: 'sintomas', loadChildren: './pages/sintomas/sintomas.module#SintomasPageModule' },
  { path: 'autoajuda', loadChildren: './pages/autoajuda/autoajuda.module#AutoajudaPageModule' },
  { path: 'view-autoajuda/:id', loadChildren: './pages/view-autoajuda/view-autoajuda.module#ViewAutoajudaPageModule' },  { path: 'list-mensagem', loadChildren: './pages/list-mensagem/list-mensagem.module#ListMensagemPageModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule' },
  { path: 'novo-post', loadChildren: './pages/novo-post/novo-post.module#NovoPostPageModule' },
  { path: 'nova-mensagem', loadChildren: './pages/nova-mensagem/nova-mensagem.module#NovaMensagemPageModule' },
  { path: 'list-videos', loadChildren: './pages/list-videos/list-videos.module#ListVideosPageModule' },
  { path: 'novo-video', loadChildren: './pages/novo-video/novo-video.module#NovoVideoPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
