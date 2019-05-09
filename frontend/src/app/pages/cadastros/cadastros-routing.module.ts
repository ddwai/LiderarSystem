import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';

const cadastrosRoutes: Routes = [
  { path: 'cadastros', component: CadastrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastrosRoutes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
