import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { ViewChild,ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginRe', {static: true }) loginElement: ElementRef;
  auth2: any

    userLogin: UserLogin = new UserLogin()

  constructor(

    private authService: AuthService,
    private router: Router,
    private alert: AlertasService

  )
  
   { }

  ngOnInit(): void {
    this.iniciaGoogle();
  }

  iniciaGoogle() {
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

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();   
        this.userLogin.email = (profile.getEmail())
        this.userLogin.senha = googleUser.getAuthResponse().id_token;
        (<HTMLInputElement>document.getElementById("email")).value = profile.getEmail();
        (<HTMLInputElement>document.getElementById("senha")).value = googleUser.getAuthResponse().id_token;
      }, (error) => {
        this.alert.showAlertInfo(JSON.stringify(error, undefined, 2));
      });
  }


  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      environment.token = this.userLogin.token
      this.router.navigate(['/feed'])
    })


  }

}
