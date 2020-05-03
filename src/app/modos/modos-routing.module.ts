import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModosHomeComponent } from './modos-home/modos-home.component';


const routes: Routes = [
  {path:'',component:ModosHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModosRoutingModule { }
