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
    public rota: Router) { }

  ngOnInit(): void {
  }

  

  

}
