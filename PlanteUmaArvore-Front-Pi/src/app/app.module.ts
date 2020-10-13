import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SobreComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    FeedComponent,
    PostTemaComponent,
    PutPostagemComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    DeletePostagemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
