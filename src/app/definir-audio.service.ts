import { Injectable, OnInit } from '@angular/core';

import { Letrasdeaudio } from './letrasdeaudio';
import { LETRASDEAUDIOS } from './LETRASDEAUDIOS';
import { Letrasdeaudiopt } from './letrasdeaudiopt';
import { LETRASDEAUDIOSPT } from './LETRASDEAUDIOSPT';

@Injectable({
  providedIn: 'root'
})
export class DefinirAudioService implements OnInit {

     // contiene las letras correspondientes a cada audio
letrasdeaudio: Letrasdeaudio[] = LETRASDEAUDIOS;
letrasdeaudios = LETRASDEAUDIOS;
letrasdeaudiopt: Letrasdeaudiopt[] = LETRASDEAUDIOSPT;
letrasdeaudiospt = LETRASDEAUDIOSPT;

letraSeleccionada: Letrasdeaudio[]= [];
letraSeleccionadapt: Letrasdeaudiopt[]= [];


  ngOnInit(){
  this.nivel = '';
  this.archivo = '';
  this.captarLetras();
  this.captarLetraspt();
  this.captarLetradelaudio();
  }

// inicio - estas variables se reciben desde los componentes que contienen los enlaces de cada dictado (niveles principiante, intermedio y avanzado)
nivel?:string;            
archivo?:string;
nro:number =0;
inicialnivel:number =0;
finalnivel:number =0;

// fin - variables se reciben desde los componentes que contienen los enlaces de cada dictado (niveles principiante, intermedio y avanzado)

archivoAudio:string='';
	
	
	definirAudio<type>(arg1:string|undefined,arg2:number):string{       //para definir el nombre de los audios - solo hay archivos mp3 
		if (arg1 =='' || arg1==undefined){
			this.archivoAudio = '';
		}else{
			this.archivo = arg2.toString();
			this.archivoAudio = 'assets/sounds/'+arg1+'/'+this.archivo+'.mp3';
		}
	return this.archivoAudio;
	} 
	
	
	captarLetras(): Letrasdeaudio[]{
	this.letrasdeaudios = LETRASDEAUDIOS;
	return this.letrasdeaudios;
	}	
	
	captarLetraspt(): Letrasdeaudiopt[]{
	this.letrasdeaudiospt = LETRASDEAUDIOSPT;
	return this.letrasdeaudiospt;
	}	
	
	// selecciona un solo objeto de todo el array de objetos
	captarLetradelaudio(): Letrasdeaudio[]{
	if (this.nivel =='avanzado' || this.nivel =='intermedio' || this.nivel =='principiante'){
	this.letraSeleccionada = this.letrasdeaudios.filter( (obj) => { return ( obj.nivel === this.nivel && obj.nro === this.nro) }   );
	}else{
	this.letraSeleccionada = [];
	}
	return this.letraSeleccionada;
	}
	
	captarLetradelaudiopt(): Letrasdeaudiopt[]{
	if (this.nivel =='avanzadopt' || this.nivel =='intermediopt' || this.nivel =='principiantept'){
	this.letraSeleccionadapt = this.letrasdeaudiospt.filter( (obj) => { return ( obj.nivel === this.nivel && obj.nro === this.nro) }   );
	}else{
	this.letraSeleccionadapt = [];
	}
	return this.letraSeleccionadapt;
	}


prueba:string = '';
indice1:number = 0;
indice2:number = 0;
indice1a:number = 0;
indice2a:number = 0;
propertyName1 = 'fraseES';
propertyName1a = 'frasePT';
propertyName2 = 'fraseEN';
prueba2:string = '';
objetoparacomparar:Letrasdeaudio[]= [];
objetoparacompararpt:Letrasdeaudiopt[]= [];


	extraerTexto<Type>(arg1:boolean,arg2:boolean,arg3:Letrasdeaudio[],arg4:Letrasdeaudiopt[]):string{
	if (arg2 == true){
	this.prueba = JSON.stringify(arg4);
	this.indice1 = this.prueba.indexOf(this.propertyName1a);
	this.indice2 = this.prueba.indexOf(this.propertyName2);
	this.indice1a = this.indice1+10;
	this.indice2a = this.indice2-3;
	this.prueba2 = this.prueba.substring(this.indice1a,this.indice2a);
	}else{
	if (arg1 == true){
	this.prueba = JSON.stringify(arg3);
	this.indice1 = this.prueba.indexOf(this.propertyName1);
	this.indice2 = this.prueba.indexOf(this.propertyName2);
	this.indice1a = this.indice1+10;
	this.indice2a = this.indice2-3;
	this.prueba2 = this.prueba.substring(this.indice1a,this.indice2a);
	}}
	return this.prueba2;
	}
	


// asigna las variable spanish and portuguese para mostrar
spanish:boolean=false;
portuguese:boolean=false;

	activarSpanish<Type>():boolean{
     if (this.nivel =='avanzado' || this.nivel =='intermedio' || this.nivel =='principiante'){
	 this.spanish=true;
	 }else{
	 this.spanish=false;
	 }
	return this.spanish;
	}
	
	activarPortuguese<Type>():boolean{
     if (this.nivel =='avanzadopt' || this.nivel =='intermediopt' || this.nivel =='principiantept'){
	 this.portuguese=true;
	 }else{
	 this.portuguese=false;
	 }
	return this.portuguese;
	}


// asigna las variables necesarias para iniciar las animaciones
gradoA:boolean=false;
avanzado:boolean=false;
principiante:boolean=false;
intermedio:boolean=false;
 // activar grado
   
  activarGrado<Type>(arg:string):boolean{
     if (arg == 'A'){
	 this.gradoA=true;
	 }else{
	 this.gradoA=false;
	 }
  return this.gradoA;
  }
  
     // activar avanzado
  
  activarAvanzado<Type>(arg:string|undefined):boolean{
     if (arg == 'avanzado' || arg == 'avanzadopt' ){
	 this.avanzado=true;
	 }else{
	 this.avanzado=false;
	 }
  return this.avanzado;
  }
	
      // activar principiante
  
  activarPrincipiante<Type>(arg:string|undefined):boolean{
     if (arg == 'principiante' || arg == 'principiantept' ){
	 this.principiante=true;
	 }else{
	 this.principiante=false;
	 }
  return this.principiante;
  }
  
     // activar intermedio
	 
	activarIntermedio<Type>(arg:string|undefined):boolean{
	if (arg == 'intermedio' || arg == 'intermediopt' ){
	 this.intermedio=true;
	 }else{
	 this.intermedio=false;
	 }
	return this.intermedio;
	}
	
}
