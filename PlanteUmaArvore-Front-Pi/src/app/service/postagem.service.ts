  
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token  )
  }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagens/${id}`, this.token)
  }
  
  getByPrivacidadePostagem(privacidade: boolean) {
    return this.http.get(`http://localhost:8080/postagens/privacidade/${privacidade}`, this.token)
  }

 
  postPostagem(postagem: Postagem){
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }

  getByPrivacidade(privacidade: string){

    return this.http.get(`http://localhost:8080/postagens/privacidade/${privacidade}`, this.token)

  }

  putPostagem(postagem: Postagem){

    return this.http.put('http://localhost:8080/postagens', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
  }
}



  
