import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  listaTema: Tema

  constructor(
  private temaService: TemaService

  ) { }

 

  ngOnInit(){
    this.findAllTemas()
  }





  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp

    })

  }

  findByIdTema(){
    this.temaService.getByTema(this.idTema).subscribe((rep: Tema) =>{
      this.tema = resp;


    })

  }

cadastrar(){
   if(this.tema.descricao == null) {

    alert('Preencha o campo de nome do tema corretamente')

   }else{

    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema =resp
      this.router.navigate(['/feed'])
      alert('Tema cadastrado com sucesso!')

    })
   }

}

}
