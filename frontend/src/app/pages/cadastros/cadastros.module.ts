import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule,
  MatSlideToggleModule
} from '@angular/material';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros.component';
import { CadastrosPessoaComponent } from './cadastros-pessoa/cadastros-pessoa.component';
import { CadastrosCelulaComponent } from './cadastros-celula/cadastros-celula.component';
import { CadastrosPalavraComponent } from './cadastros-palavra/cadastros-palavra.component';
import { CadastrosRedeComponent } from './cadastros-rede/cadastros-rede.component';
import { CadastrosUsuarioComponent } from './cadastros-pessoa/cadastros-usuario/cadastros-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ToastrModule.forRoot({
     timeOut: 5000,
     positionClass: 'toast-top-right',
     preventDuplicates: false, 
    })
  ],
  declarations: [CadastrosComponent, CadastrosPessoaComponent, CadastrosCelulaComponent, CadastrosPalavraComponent, CadastrosRedeComponent, CadastrosUsuarioComponent]
})
export class CadastrosModule { }
