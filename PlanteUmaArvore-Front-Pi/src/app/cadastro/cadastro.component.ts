import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ViewChild,ElementRef } from '@angular/core'

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

  constructor(
    private authService: AuthService,
    private router: Router

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
        this.router.navigate(['/login'])
        alert('usuario cadastrado com sucesso')
        this.router.navigate(['/login'])
        
      })

    } else{

      alert('Suas senhas não conferem')


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
       this.cadastrar();
        
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  /*/get do Login google*/
  /*/Google Api*/

}
