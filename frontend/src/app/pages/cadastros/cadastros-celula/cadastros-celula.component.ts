import { Component, OnInit } from '@angular/core';
import { CelulaService } from './celula.service';
import { CelulaDataService } from './celula-data.service';
import { Celula } from './celula';

@Component({
  selector: 'app-cadastros-celula',
  templateUrl: './cadastros-celula.component.html',
  styleUrls: ['./cadastros-celula.component.scss']
})
export class CadastrosCelulaComponent implements OnInit {
  celula: Celula
  key: string = '';
  showMsg: boolean = false;
 
  constructor(private celulaService: CelulaService, private celulaDataService: CelulaDataService) { }
 
  ngOnInit() {
    this.celula = new Celula();
    this.celulaDataService.currentCelula.subscribe(data => {
      if (data.celula && data.key) {
        this.celula = new Celula();
        this.celula.nome = data.celula.nome;
        this.celula.informacao = data.celula.informacao;
        this.celula.logradouro = data.celula.logradouro;
        this.celula.bairro = data.celula.bairro;
        this.key = data.key;
      }
    })
  }
 
  onSubmit() {
    if (this.key) {
      this.celulaService.update(this.celula, this.key);
    } else {
      this.celulaService.insert(this.celula);
      this.showMsg = true;
    }
 
    this.celula = new Celula();
  }
}
