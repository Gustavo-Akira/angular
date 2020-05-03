import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColecoesRoutingModule } from './colecoes-routing.module';
import { ColecoeshomeComponent } from './colecoeshome/colecoeshome.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { BiographyComponent } from './biography/biography.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [ColecoeshomeComponent, TableComponent, CompaniesComponent, PartnersComponent, BiographyComponent, TabsComponent],
  imports: [
    CommonModule,
    ColecoesRoutingModule,
    SharedModule
  ],
})
export class ColecoesModule { }
