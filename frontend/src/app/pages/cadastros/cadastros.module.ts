import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros.component';
import { CadastrosPessoaComponent } from './cadastros-pessoa/cadastros-pessoa.component';
import { CadastrosCelulaComponent } from './cadastros-celula/cadastros-celula.component';
import { CadastrosPalavraComponent } from './cadastros-palavra/cadastros-palavra.component';
import { CadastrosRedeComponent } from './cadastros-rede/cadastros-rede.component';

@NgModule({
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    FormsModule
  ],
  declarations: [CadastrosComponent, CadastrosPessoaComponent, CadastrosCelulaComponent, CadastrosPalavraComponent, CadastrosRedeComponent]
})
export class CadastrosModule { }
