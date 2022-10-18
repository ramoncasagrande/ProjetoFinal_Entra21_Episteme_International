import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { SignupService } from '../service/signup.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  public usuario : Usuario = new Usuario();

  constructor(
    private authentication_service:AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authentication_service
      .login(this.usuario.email, this.usuario.password)
      .subscribe((res:any) => {
        this.autenticar(res)
      });
  }

  autenticar(is_auth:boolean){
    if (is_auth) {
      this.authentication_service.autenticar();
      this.success();
    }else{
      this.error();
    }
  }

  success(){
    this.router.navigate(['/success-login']);
  }

  error(){
    this.router.navigate(['/error']);
  }

  

}
