import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasComponent } from './listas.component';
import { ListaCelulaComponent } from './lista-celula/lista-celula.component';

const routes: Routes = [
  { path: 'listas', component: ListasComponent},
  { path: 'listacelula', component: ListaCelulaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasRoutingModule { }
