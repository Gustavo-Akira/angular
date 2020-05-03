import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModosRoutingModule } from './modos-routing.module';
import { ModosHomeComponent } from './modos-home/modos-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [ModosHomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModosRoutingModule,
    SharedModule
  ]
})
export class ModosModule { }
