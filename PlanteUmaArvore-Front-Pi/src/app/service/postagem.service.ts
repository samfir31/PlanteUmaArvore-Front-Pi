import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor() { }
}





//serviço da postagem
postPostagem(postagem: Postagem){
  return this.http.post('http://localhost:8080/postagens', postagem, this.token)

}

// fim do serviço postagem


