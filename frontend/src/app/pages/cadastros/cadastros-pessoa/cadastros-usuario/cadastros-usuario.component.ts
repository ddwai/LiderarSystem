import { CelulaDataService } from './../../cadastros-celula/celula-data.service';
import { CelulaService } from './../../cadastros-celula/celula.service';
import { Celula } from './../../cadastros-celula/celula';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastros-usuario',
  templateUrl: './cadastros-usuario.component.html',
  styleUrls: ['./cadastros-usuario.component.scss']
})
export class CadastrosUsuarioComponent implements OnInit {
  celulas: Observable<any>;

  constructor(private celulaService: CelulaService, private celulaDataService: CelulaDataService) { }

  ngOnInit() {
    this.celulas = this.celulaService.getAll();
  }

  delete(key: string) {
    this.celulaService.delete(key);
  }
 
  edit(celula: Celula, key: string) {
    this.celulaDataService.changeCelula(celula, key);
  }
}
