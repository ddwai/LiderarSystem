import { CelulaDataService } from '../../cadastros/cadastros-celula/celula-data.service';
import { CelulaService } from '../../cadastros/cadastros-celula/celula.service';
import { Celula } from '../../cadastros/cadastros-celula/celula';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-celula',
  templateUrl: './lista-celula.component.html',
  styleUrls: ['./lista-celula.component.scss']
})
export class ListaCelulaComponent implements OnInit {
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
