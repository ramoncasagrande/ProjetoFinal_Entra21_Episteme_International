import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public api:string = 'http://localhost:8080/api/users';

  constructor(
  public http:HttpClient
  ) { }

  salvar(dados:any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Acess-Control-Allow-Origin' : '*'})
    };

    return this.http.post(this.api, dados, httpOptions);
  }
}
