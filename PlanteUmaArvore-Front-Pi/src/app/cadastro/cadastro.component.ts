import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ViewChild,ElementRef } from '@angular/core'
import { AlertasService } from '../service/alertas.service';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2: any
  usuario: Usuario = new Usuario()
  senha: string
  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit(): void {           
    this.googleInitialize();
  }  

  conferirSenha(event: any){
    this.senha = event.target.value
  }  

cadastrar(){
    if (this.senha === this.usuario.senha){
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp  
        this.alert.showAlertSuccess('usuario cadastrado com sucesso')           
        document.getElementById("teste").click();
      })

    } else{
      this.alert.showAlertInfo('Suas senhas não conferem')
    }    
  }
  /*Google Api*/
  /*Inicialização do Login google*/
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '405739907128-3p04j2bendhvkpmrjecserh2o4pineua.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
    }
/*Inicialização do Login google*/

/*get do Login google*/
  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        
      let profile = googleUser.getBasicProfile(); 
       this.usuario.email = (profile.getEmail())
       this.usuario.nome = (profile.getName())
       this.senha = googleUser.getAuthResponse().id_token
       this.usuario.senha = googleUser.getAuthResponse().id_token  
       this.usuario.foto = profile.getImageUrl() 
       this.userLogin.email = (profile.getEmail())
        this.userLogin.senha = googleUser.getAuthResponse().id_token;
        (<HTMLInputElement>document.getElementById("linkFoto")).value = profile.getImageUrl();
        (<HTMLInputElement>document.getElementById("nome")).value = profile.getName();
        (<HTMLInputElement>document.getElementById("email")).value = profile.getEmail();
        (<HTMLInputElement>document.getElementById("senha")).value = googleUser.getAuthResponse().id_token;
        (<HTMLInputElement>document.getElementById("senhaConf")).value = googleUser.getAuthResponse().id_token;
       this.cadastrar();
           
      }, (error) => {
        this.alert.showAlertSuccess(JSON.stringify(error, undefined, 2));
      });
  }
  /*/get do Login google*/
  /*/Google Api*/
  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      environment.token = this.userLogin.token      
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.email = this.userLogin.email
      this.router.navigate(['/feed'])
      
    })


  }
}
