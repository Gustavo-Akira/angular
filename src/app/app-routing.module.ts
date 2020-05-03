import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'modos',loadChildren:()=>import('./modos/modos.module').then(m=>m.ModosModule)},
  {path:'views',loadChildren:()=>import('./views/views.module').then(m=>m.ViewsModule)},
  {path:'colecoes',loadChildren: ()=>import('./colecoes/colecoes.module').then(m=>m.ColecoesModule)},
  {path:'elementos', loadChildren: () => import('./elementos/elementos.module').then(m=>m.ElementosModule)},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
