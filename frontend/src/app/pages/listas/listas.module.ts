import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas.component';
import { ListaCelulaComponent } from './lista-celula/lista-celula.component';

@NgModule({
  imports: [
    CommonModule,
    ListasRoutingModule
  ],
  declarations: [ListasComponent, ListaCelulaComponent]
})
export class ListasModule { }
