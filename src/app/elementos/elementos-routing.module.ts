import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementosHomeComponent } from './elementos-home/elementos-home.component';


const routes: Routes = [
  {path:'',component:ElementosHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosRoutingModule { }
