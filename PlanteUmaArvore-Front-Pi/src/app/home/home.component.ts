import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}

/* animação linha 1*/
function animeScroll1(){  
  const windowstop = window.pageYOffset;
  
    document.querySelectorAll('[data-anime1]').forEach(function(elemento){ 
      if(windowstop>1200){      
      elemento.classList.add('animacao');
      console.log(windowstop)
    }
    
  
  else{        
      elemento.classList.remove('animacao');
    }    
  })
}    
  
  
window.addEventListener('scroll', function(){
animeScroll1();
})

/* /animação linha 1*/

/* animação linha 2*/
function animeScroll2(){  
      const windowstop = window.pageYOffset;          
      
        document.querySelectorAll('[data-anime2]').forEach(function(elemento){  
          if(windowstop>1600){      
          elemento.classList.add('animacao');
        }
          else{        
          elemento.classList.remove('animacao');
        }         
      })
      

    }    
      
      
window.addEventListener('scroll', function(){
    animeScroll2();
})
/* /animação linha 2*/
