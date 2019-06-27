import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCelulaComponent } from './lista-celula.component';

describe('ListaCelulaComponent', () => {
  let component: ListaCelulaComponent;
  let fixture: ComponentFixture<ListaCelulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCelulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
