import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CursosonlineComponent } from './cursosonline/cursosonline.component';
import { OrientacaoComponent } from './orientacao/orientacao.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { SignupComponent } from './signup/signup.component';
import { ResetsenhaComponent } from './resetsenha/resetsenha.component';
import { ParceriasComponent } from './parcerias/parcerias.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgendarservicosComponent } from './agendarservicos/agendarservicos.component';
import { NegociosComponent } from './negocios/negocios.component';
import { SaibamaisComponent } from './saibamais/saibamais.component';
import { AuthService } from './login/auth.service';
import { SucessoUsuarioComponent } from './sucesso-usuario/sucesso-usuario.component';
import { SuccessLoginComponent } from './messages/success-login/success-login.component';
import { ErrorComponent } from './messages/error/error.component';
import { ErrorSignupComponent } from './messages/error-signup/error-signup.component';

import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CursosonlineComponent,
    OrientacaoComponent,
    QuemsomosComponent,
    SignupComponent,
    ResetsenhaComponent,
    ParceriasComponent,
    SucessoComponent,
    AgendarservicosComponent,
    NegociosComponent,
    SaibamaisComponent,
    SucessoUsuarioComponent,
    SuccessLoginComponent,
    ErrorComponent,
    ErrorSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
    CarouselModule

  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
