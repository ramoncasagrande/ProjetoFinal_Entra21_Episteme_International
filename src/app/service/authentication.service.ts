import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public http:HttpClient,
    public router:Router
  ) { }

  login(check_email:string, check_password:string) {
    const http_options:any = {
      Headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      })
    }

    return this.http.post(
      'http://localhost:8080/api/users/auth',
      {
        email : check_email,
        password : check_password
      },
      http_options
    );
  }

  
}
