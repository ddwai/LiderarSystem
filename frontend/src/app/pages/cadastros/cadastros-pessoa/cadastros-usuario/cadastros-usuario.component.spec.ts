import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosUsuarioComponent } from './cadastros-usuario.component';

describe('CadastrosUsuarioComponent', () => {
  let component: CadastrosUsuarioComponent;
  let fixture: ComponentFixture<CadastrosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
