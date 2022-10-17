import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  public usuario : Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    public signup_service: SignupService,
    public rota: Router) { }

  ngOnInit(): void {
  }

  

}
