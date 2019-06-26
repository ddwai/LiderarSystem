import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosPessoaComponent } from './cadastros-pessoa.component';

describe('CadastrosPessoaComponent', () => {
  let component: CadastrosPessoaComponent;
  let fixture: ComponentFixture<CadastrosPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrosPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrosPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
