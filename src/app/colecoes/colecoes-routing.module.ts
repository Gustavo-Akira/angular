import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColecoeshomeComponent } from './colecoeshome/colecoeshome.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {
    path:'',component:ColecoeshomeComponent,
    children:[
      {path:'',component: BiographyComponent},
      {path:'parceiros',component: PartnersComponent},
      {path:'companias',component:CompaniesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColecoesRoutingModule { }
