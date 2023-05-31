import { Component, Input, OnInit } from '@angular/core';

import { ClearService} from '../clear.service';
import { CompararService } from '../comparar.service';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-ingresar-numero',
  templateUrl: './ingresar-numero.component.html',
  styleUrls: ['./ingresar-numero.component.css']
})
export class IngresarNumeroComponent implements OnInit{

constructor(public randomService: RandomService,
				public clearService: ClearService,
					public compararService: CompararService) { }


numeroingresado:number = 0;
inicialingresado:number = 0;
secuenciaI:number[] = [0];
secuenciaF:number[] = [0];
numero:number=0;
max?:number;
min:number=1;
mensajeES?:string='';
mensajeEN?:string='';
mensajedevalidacion:string='';
numeroingresado1:string='';
texto1:string='';
texto2:string='';
texto3:string='';
texto4:string='';
texto5:string='';
texto6:string='';


// INICIO para definir el componente secuencial a utilizar portugues o español

@Input() idioma:string= '';
pt?:boolean;
es?:boolean;

	ptFn(){
	if (this.idioma == 'portuguese'){
	this.pt = true;
	this.texto1='Há ';
	this.texto2=' palavras e frases para praticar';
	this.texto3=' Deve introduzir um número';
	this.texto4=' O número deve ser inferior a ';
	this.texto5=' O número deve ser maior que 0';
	this.texto6='digite um número e clique em INICIAR';
	}
	}
	
	esFn(){
	if (this.idioma == 'spanish'){
	this.es = true;
	this.texto1='Hay ';
	this.texto2=' palabras y frases para practicar';
	this.texto3='Debe ingresar un número';
	this.texto4='Número debe ser menor que ';
	this.texto5='Número debe ser mayor que 0';
	this.texto6='escribe un número y click INICIAR';
	}
	}


// FIN para definir el componente secuencial a utilizar portugues o español

	ngOnInit(){
	this.ptFn();
	this.esFn();
	this.max=this.randomService.numeroMax();
	this.mensajeES= this.texto1 + this.max + this.texto2;
	this.mensajeEN='There are '+this.max+' words and phrases to practice';
	}

	onKey2(event:any) { // without type info
    this.numeroingresado1  = event.target.value;	
	this.numeroingresado1 = this.numeroingresado1.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '0');
	}
                   // inicia validacion del numero ingresado y emite mensaje de ser necesario
	validacion(){
	this.secuenciaI = this.clearService.clearArray(this.secuenciaI);    // borra valores previos
	this.secuenciaF = this.clearService.clearArray(this.secuenciaF);    // borra valores previos
	this.numeroingresado = Number(this.numeroingresado1);
	this.validarIngresoMensaje(this.numeroingresado,this.max);
	this.validarIngreso(this.numeroingresado,this.max);
	this.asignarValor(this.numeroingresado);
	this.finalSecuencia(this.numeroingresado,this.max);
	this.inicialSecuencia(this.inicialingresado,this.max);
	this.numeroingresado1 = '';
	}


	
	validarIngresoMensaje<type>(arg1:number|undefined,arg2:number|undefined):string{
	this.mensajedevalidacion = this.clearService.clear(this.mensajedevalidacion);    	
	if (arg1==undefined || arg1==0){
		this.mensajedevalidacion = this.texto3;
		return this.mensajedevalidacion;
		}else{
				if(arg2==undefined){
				this.mensajedevalidacion = '';
				return this.mensajedevalidacion;
				}else{		
		if ( arg1 > arg2){
		this.mensajedevalidacion = this.texto4 +arg2;
		return this.mensajedevalidacion;
		}else{
				if ( arg1 < 0){
				this.mensajedevalidacion = this.texto5;
				return this.mensajedevalidacion;
				}else{
			this.mensajedevalidacion = '';	
			return this.mensajedevalidacion;
			}			
	}}}
	}
	
	validarIngreso<type>(arg1:number|undefined,arg2:number|undefined):number{
	
   	
	if (arg1==undefined || arg1==0){
		this.numeroingresado = 0;
		return this.numeroingresado;
		}else{
				if(arg2==undefined){
				this.numeroingresado = 0;
				return this.numeroingresado;
				}else{
		if(arg1 < 0){
		this.numeroingresado = 0;
		return this.numeroingresado;
		}else{	
		if ( arg1 > arg2){
		this.numeroingresado = 0;
		return this.numeroingresado;
		}else{	
			this.numeroingresado = arg1;
			return this.numeroingresado;
	}}}}
	}
	                // finaliza validacion del numero ingresado
					
	asignarValor(arg1:number):number{
		if( arg1 <= 0){
			this.inicialingresado = -1;
			return this.inicialingresado;
			}else{
	this.inicialingresado =  --arg1;
	return this.inicialingresado;
	}
	}
	
	
	
	
					// crea el array de numeros secuenciaF
					
	
	finalSecuencia(arg1:number|undefined,arg2:number|undefined):number[]{
	this.secuenciaF = [0];                             // borra datos previos
	if (arg1==undefined || arg1==0 || arg2==undefined){
		this.secuenciaF = [0];		
	
	}else{	
			this.secuenciaF.shift();
			this.secuenciaF.push(arg1);	
			for (let i = 0; i < 9; i++) {                    //probar con menos deberia crear un array de 10 numeros, el numero ingresado y 9 mas
				if (arg1 < arg2){
				arg1 = ++arg1;
				this.secuenciaF.push(arg1);
				}else{                                      // si se supera el final del array, se continua con el inicio 
				arg1 = 0;
				arg1 = ++arg1;
				this.secuenciaF.push(arg1);
				}}
	}
	this.secuenciaF.push(0);
	return this.secuenciaF;
	}	 
	
	
	
					// crea el array de numeros secuenciaI
					
	inicialSecuencia(arg1:number|undefined,arg2:number|undefined):number[]{
	this.secuenciaI = [0];              										// borra datos previos  
	
	if (arg1==undefined || arg1 == -1 || arg2==undefined){
		this.secuenciaI = [0];		
		}else{
			arg2 = --arg2;
			this.secuenciaI.shift();
			this.secuenciaI.push(arg1);	
			for (let i = 0; i < 9; i++) {                    //deberia crear un array de 10 numeros, el numero ingresado y 9 mas
				if (arg1 < arg2){
				arg1 = ++arg1;
				this.secuenciaI.push(arg1);
				}else{                                       // si se supera el final del array, se continua con el inicio 
				arg1 = -1;
				arg1 = ++arg1;
				this.secuenciaI.push(arg1);
				}}
	
	}
	return this.secuenciaI;
	}	


	

}
