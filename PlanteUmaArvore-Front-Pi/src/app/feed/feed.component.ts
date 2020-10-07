import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  // aqui inicia
  key= 'data'
  reverse = true
  
// aqui finaliza

  constructor() { }

  ngOnInit(): void {
  }

  // Metodos da postagem
publicar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema

  if(this.postagem.titulo== null || this.postagem.texto == null || this.postagem.tema == null){

    alert('Preencha todos os campos antes de publicar!')
  }else{

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.postagem = new Postagem()
      alert('postagem realizada com sucesso')
      this.findAllPostagens()

    })


  }
}
  

// finalizado metodo postagem

}
