import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private alert: AlertasService
  ) { }

  ngOnInit(): void {
  }

  click(){
    this.alert.showAlertSuccess("Enviado com sucesso")    
  }

}
