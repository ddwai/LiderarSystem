import { Injectable } from '@angular/core';
import { Celula } from './celula';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelulaDataService {
  private celulaSource = new BehaviorSubject({ celula: null, key: '' });
  currentCelula = this.celulaSource.asObservable();
 
  constructor() { }
 
  changeContato(celula: Celula, key: string) {
    this.celulaSource.next({ celula: celula, key: key });
  }
}