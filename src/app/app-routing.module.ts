import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { CursosonlineComponent } from './cursosonline/cursosonline.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './messages/error/error.component';
import { SuccessLoginComponent } from './messages/success-login/success-login.component';
import { NegociosComponent } from './negocios/negocios.component';
import { OrientacaoComponent } from './orientacao/orientacao.component';
import { ParceriasComponent } from './parcerias/parcerias.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ResetsenhaComponent } from './resetsenha/resetsenha.component';
import { SaibamaisComponent } from './saibamais/saibamais.component';
import { AuthenticationService } from './service/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { SucessoUsuarioComponent } from './sucesso-usuario/sucesso-usuario.component';
import { SucessoComponent } from './sucesso/sucesso.component';

const routes: Routes = [
  {path: "header", component: HeaderComponent},
  {path: "home", component: HomeComponent},
  {path: "footer", component:FooterComponent},
  {path: "carrinho", component:CarrinhoComponent},
  {path: "contato", component:ContatoComponent},
  {path: "orientacao", component:OrientacaoComponent},
  {path: "quemsomos", component:QuemsomosComponent},
  {path: "login", component:LoginComponent},
  {path: "cursosonline", component: CursosonlineComponent},
  {path: "signup", component: SignupComponent},
  {path: "resetsenha", component:ResetsenhaComponent},
  {path: "parcerias", component:ParceriasComponent},
  {path: "sucesso", component:SucessoComponent},
  {path: "negocios", component:NegociosComponent},
  {path: "saibamais", component:SaibamaisComponent},
  {path: "sucesso-usuario", component:SucessoUsuarioComponent},
  {path: "error", component:ErrorComponent},
  {path: "success-login", component:SuccessLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
