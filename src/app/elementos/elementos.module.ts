import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementosRoutingModule } from './elementos-routing.module';
import { ElementosHomeComponent } from './elementos-home/elementos-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimeDirective } from './time.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentoComponent } from './segmento/segmento.component';


@NgModule({
  declarations: [ElementosHomeComponent, PlaceholderComponent, TimeDirective, SegmentoComponent],
  imports: [
    CommonModule,
    ElementosRoutingModule,
    SharedModule
  ],
})
export class ElementosModule { }
