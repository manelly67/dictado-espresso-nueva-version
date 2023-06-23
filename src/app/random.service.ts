import { Injectable, OnInit } from '@angular/core';
import { ESPALABRAS } from './es-palabras';
import { PTPALABRAS } from './pt-palabras';
import { ENPALABRAS } from './en-palabras';
import { ESPALABRASbeginner } from './es-palabras-beginner';
import { ENPALABRASbeginner } from './en-palabras-beginner';
import { PTPALABRASbeginner } from './pt-palabras-beginner';


@Injectable({
  providedIn: 'root'
})

export class RandomService implements OnInit{

  
                                       /* este servicio importa los listados(array) de palabras para ser utilizados en el componente */

final: number = 0; 
inicial: number = 0;

max: number = 0;                
min: number = 1;
espalabra: string ='?';
espalabras: string[]= [];
esbeginnerpalabras: string[]= [];
espalabraResp: string ='?';
espalabrasResp: string[]= [];   
ptpalabra: string ='?';
ptpalabras: string[]= [];
ptbeginnerpalabras: string[]= [];
enpalabra: string ='?';
enpalabras: string[]= [];
enbeginnerpalabras: string[]= [];
  

	ngOnInit() {
	this.captarDatosES();
	this.captarDatosPT();
	this.captarDatosEN();
	this.captarDatosESbeginner();
	this.captarDatosPTbeginner();
	this.captarDatosENbeginner();

	this.numeroFinal();
	this.numeroInicial();
	}      

	captarDatosES() : string[]{
	this.espalabras = ESPALABRAS;
	return this.espalabras;
	}
	
	
	captarDatosPT() : string[]{
	this.ptpalabras = PTPALABRAS;
	return this.ptpalabras;
	}
	
	captarDatosEN() : string[]{
	this.enpalabras = ENPALABRAS;
	return this.enpalabras;
	}
	
	captarDatosESbeginner() : string[]{
	this.esbeginnerpalabras = ESPALABRASbeginner;
	return this.esbeginnerpalabras;
	}
	
	
	captarDatosPTbeginner() : string[]{
	this.ptbeginnerpalabras = PTPALABRASbeginner;
	return this.ptbeginnerpalabras;
	}
	
	captarDatosENbeginner() : string[]{
	this.enbeginnerpalabras = ENPALABRASbeginner;
	return this.enbeginnerpalabras;
	}


	
	numeroFinal(): number{
		this.max = ESPALABRAS.length;
		this.final = Math.ceil(Math.random() * (this.max - this.min) + this.min);	/* genera un numero aleatorio dentro de la longitud del listado */	
		return this.final;
	}
	
	numeroInicial(): number{
	this.inicial = this.final-1;
	return this.inicial;	
	}
	
	numeroMax(): number{
	this.max = ESPALABRAS.length;;
	return this.max;	
	}
	

	
	
}

