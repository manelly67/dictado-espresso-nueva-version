import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CompararService {

  constructor() { }
  
array:string[] = [];
nuevoArray:string[] = [];
secuenciaArray:string[] = [];
siguiente:string[] = [];         // se utiliza solo para archivar variable que será utilizada por otro componente
label2:string='';				 // se utiliza solo para archivar variable que será utilizada por otro componente

contar:number = 0;
percentAciertos: number = 0;
mostrarIndicador: string = '';

iniciar:boolean=true;           // archivar esta condicion para enviar al componente ingreso-numero el MOSTRAR-OCULTAR el input numero



	crearArray <Type> (arg:string): string[] {              // crea un array separando cada palabra de la frase y descarta los espacios vacios
		this.array = arg.split(' ');
		this.array = this.array.filter( word => word.length > 0); 
		return this.array;
	}
	

	/*  ESTA FUNCION SIRVE CUANDO EL TEXTO INGRESA CON INPUT EN LUGAR DE TEXTAREA
	comparandoArrays<Type>(arg1:string[],arg2:string[]):string[]{
	if (arg2[0]==undefined){                                      //si no se ha escrito texto no guarda nada en el nuevoArray (mensaje emitido)
	this.nuevoArray[0]='';
	}else{
		for (let i = 0; i < arg1.length; i++) {
		if (arg2[i]==undefined){
		this.nuevoArray[i]=arg1[i]+' (?)';
		
		}else{
			if(arg1[i]==arg2[i]){
			this.nuevoArray[i]=arg1[i]+'';
			
			}else{
		this.nuevoArray[i]=arg1[i]+' ('+arg2[i]+')';
																// crea un nuevo array comparando cada item segun parametros
		}}}
	}
	return this.nuevoArray;	
	}  */

 // ESTA FUNCION SE CREO PARA ELIMINAR ESPACIOS ADICIONALES QUE APARECEN CUANDO EL TEXTO INGRESA POR TEXTAREA
comparando:string='';

	comparandoArrays<Type>(arg1:string[],arg2:string[]):string[]{
	if (arg2[0]==undefined){                                      //si no se ha escrito texto no guarda nada en el nuevoArray (mensaje emitido)
	this.nuevoArray[0]='';
	}else{
		for (let i = 0; i < arg1.length; i++) {
		if (arg2[i]==undefined){
		this.nuevoArray[i]=arg1[i]+' (?)';
		
		}else{
			this.comparando = arg2[i];
			this.comparando = this.comparando.trimStart();
			this.comparando = this.comparando.trimEnd();
			if(arg1[i]==this.comparando){
			this.nuevoArray[i]=arg1[i]+'';
			this.comparando = '';
			}else{
		this.nuevoArray[i]=arg1[i]+' ('+arg2[i]+')';
																// crea un nuevo array comparando cada item segun parametros
		}}}
	}
	return this.nuevoArray;	
	} 


	aciertos<Type>(arg1:string[]):number{
	if (arg1[0]==''){
	this.contar = 0;                                             // si no ha escrito palabras el array está vacio y cuenta 0 aciertos (mensaje emitido)
	}else{
		for (let i = 0; i < arg1.length; i++){
			if(arg1[i].includes('(')){
			this.contar=this.contar+1;                           // cuenta los desaciertos
			}else{}
		}	
	this.contar=arg1.length-this.contar;	                     // por diferencia obtiene los aciertos
	}
	return this.contar;
	}

	porcentaje<Type>(arg1:string[],arg2:number):number{
	if (arg1[0]==''){
	this.percentAciertos = 0;                                             // si no ha escrito palabras el array está vacio y cuenta 0 aciertos (mensaje emitido)
	}else{
	this.percentAciertos = (arg2/arg1.length)*100;
	}
	return this.percentAciertos;
	}
	
	
	indicador<Type>(arg1:string[],arg2:number):string{
	if (arg1[0]==''){
	this.mostrarIndicador = '';                                             // si no ha escrito palabras el array está vacio y no emite indicador (mensaje emitido)
	}else{
		if (arg2==100){
		this.mostrarIndicador = '\u2713';
		}else{
		this.mostrarIndicador = 'X';
		}
		}
	return this.mostrarIndicador;
	}
	
// agregadas para ser utilizadas por dictado component	

porcentajeInd:boolean=false;       // para ser utilizado en el dictado component	
grado:string='';					// para ser utilizado en el dictado component	

	porcentajeBoolean<Type>(arg:number):boolean{
	if (arg > 0){
	this.porcentajeInd = true;
	}else{
	this.porcentajeInd = false;
	}
	return this.porcentajeInd;
	}
	
			graduacion<Type>(arg:number):string{
			if( arg == 100){
			this.grado = 'A';
			}else{
			if (arg < 100 && arg > 40){
			this.grado = 'B';
			}else{
			if (arg < 40 || arg == 40){
			this.grado = 'C';
			}}}
			return this.grado;
			}
			
	porcentajeMostrar<Type>(arg:number):number{
	arg = arg/100;
	return arg;
	}

  }



 
  

