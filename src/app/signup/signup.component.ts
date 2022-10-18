import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public dados: any = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
  }

  public field_form = '';

  constructor(
    public signup_service: SignupService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.voltar();
  }

  criar() {
    if (this.dados.name == '' || this.dados.email == '' || this.dados.password == '') {
      this.field_form = 'field-error';
      return;
    }
    this.signup_service.salvar(this.dados)
    .subscribe((response: any) => {
        this.checkUser(response)
      });
  }

  voltar() {
    this.dados = {
      id: 0,
      name: '',
      email: '',
      password: ''
    }

  }

  checkUser(check:boolean){
    if (check){
      this.router.navigate(['/sucesso-usuario']);
    }else{
      this.router.navigate(['/error-signup']);
    }
  }
}
