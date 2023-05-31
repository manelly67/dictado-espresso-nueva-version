import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecladoService implements OnInit {

  constructor(
  ) { }
  
 
arraytexto:string = '';
array:string[] = [];                   /* el texto se va incorporando en el array desde el teclado y las teclas de caracteres especiales del escribeComponent  */
n:number = this.array.length;



textodefinitivo:string = '';           /* este texto será luego utilizado a traves de guardartexto() del randomComponent para una posterior comparacion*/


//inicio definir teclado
nivelcategoria:number = 0;
showPT?:boolean;
showSP?:boolean;

	ngOnInit(){
	this.nivelcategoria;               // para que el componente Teclado defina el teclado a utilizar
	this.definirTecladoSP(this.nivelcategoria);
	this.definirTecladoPT(this.nivelcategoria);
										
	}

	definirTecladoSP<type>(arg:number):boolean{
	if (arg < 13){
	this.showSP = true;
	}else{
	this.showSP = false;
	}
	return this.showSP;
	}


	definirTecladoPT<type>(arg:number):boolean{
	if (arg < 12){
	this.showPT = false;
	}else{
	this.showPT = true;
	}
	return this.showPT;
	}
// fin definir teclado

	
}
