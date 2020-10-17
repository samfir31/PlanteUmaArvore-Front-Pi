
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from './../service/tema.service';
import { Tema } from './../model/Tema';
import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id:number = this.route.snapshot.params["id"];
    this.findByIdTema(id)

  }

  findByIdTema(id:number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    });
  }

  btnSim() {
   this.temaService.deleteTema(this.tema.id).subscribe(()=> {
    this.alert.showAlertSuccess('Tema deletado com sucesso.')
    this.router.navigate(['/cadastro-tema'])
    } )

  }

  btnNao() {
    this.router.navigate(['/cadastro-tema'])
  }

}