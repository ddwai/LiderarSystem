import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';
import { CadastrosPessoaComponent } from './cadastros-pessoa/cadastros-pessoa.component';
import { CadastrosCelulaComponent } from './cadastros-celula/cadastros-celula.component';
import { CadastrosPalavraComponent } from './cadastros-palavra/cadastros-palavra.component';
import { CadastrosRedeComponent } from './cadastros-rede/cadastros-rede.component';

const cadastrosRoutes: Routes = [
  { path: 'cadastros', component: CadastrosComponent},
  { path: 'cadastrospessoa', component: CadastrosPessoaComponent},
  { path: 'cadastroscelula', component: CadastrosCelulaComponent},
  { path: 'cadastrospalavra', component: CadastrosPalavraComponent},
  { path: 'cadastrosrede', component: CadastrosRedeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastrosRoutes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
