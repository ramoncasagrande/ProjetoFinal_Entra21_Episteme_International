import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoUsuarioComponent } from './sucesso-usuario.component';

describe('SucessoUsuarioComponent', () => {
  let component: SucessoUsuarioComponent;
  let fixture: ComponentFixture<SucessoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
