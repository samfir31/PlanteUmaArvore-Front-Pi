import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nomeUser = environment.nome
  fotoUser = environment.foto
  email = environment.email  
  

  constructor() { }

  ngOnInit(): void {
  }

}
