import { Injectable, OnInit } from '@angular/core';

import { Letrasdeaudio } from './letrasdeaudio';
import { LETRASDEAUDIOS } from './LETRASDEAUDIOS';

@Injectable({
  providedIn: 'root'
})
export class DefinirAudioService implements OnInit {

     // contiene las letras correspondientes a cada audio
letrasdeaudio: Letrasdeaudio[] = LETRASDEAUDIOS;
letrasdeaudios = LETRASDEAUDIOS;
letraSeleccionada: Letrasdeaudio[]= [];


  ngOnInit(){
  this.nivel = '';
  this.archivo = '';
  this.captarLetras();
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
	
	
	definirAudio<type>(arg1:string|undefined,arg2:number):string{       //para definir el nombre de los audios - hay archivos mp3 y archivos 3gpp
		if (arg1 =='avanzado'&& arg2 < 24){
			this.archivo = arg2.toString();
			this.archivoAudio = 'assets/sounds/'+arg1+'/'+this.archivo+'.mp3';
		}else{
			if (arg1 =='avanzado'&& arg2 > 23){
			this.archivo = arg2.toString();
			this.archivoAudio = 'assets/sounds/'+arg1+'/'+this.archivo+'.3gpp';
		}if (arg1 =='principiante'){
			this.archivo = arg2.toString();
			this.archivoAudio = 'assets/sounds/'+arg1+'/'+this.archivo+'.mp3';
		}else{
		if (arg1 =='intermedio'&& arg2 < 35){
			this.archivo = arg2.toString();
			this.archivoAudio = 'assets/sounds/'+arg1+'/'+this.archivo+'.mp3';
		}else{
			if (arg1 =='intermedio'&& arg2 > 34){
			this.archivo = arg2.toString();
			this.archivoAudio = 'assets/sounds/'+arg1+'/'+this.archivo+'.3gpp';
		}else{
		this.archivoAudio = '';
	}}}}
	return this.archivoAudio;
	}
	
	
	captarLetras(): Letrasdeaudio[]{
	this.letrasdeaudios = LETRASDEAUDIOS;
	return this.letrasdeaudios;
	}	
	
	// selecciona un solo objeto de todo el array de objetos
	captarLetradelaudio(): Letrasdeaudio[]{
	this.letraSeleccionada = this.letrasdeaudios.filter( (obj) => { return ( obj.nivel === this.nivel && obj.nro === this.nro) }   );
	return this.letraSeleccionada;
	}

	
	//inicio extraer del objeto seleccionado solo el texto en español
prueba:string = '';
indice1:number = 0;
indice2:number = 0;
indice1a:number = 0;
indice2a:number = 0;
propertyName1 = 'fraseES';
propertyName2 = 'fraseEN';
prueba2:string = '';
	
	extraerTextoES<Type>(arg:Letrasdeaudio[]):string{
	this.prueba = JSON.stringify(arg);
	this.indice1 = this.prueba.indexOf(this.propertyName1);
	this.indice2 = this.prueba.indexOf(this.propertyName2);
	this.indice1a = this.indice1+10;
	this.indice2a = this.indice2-3;
	this.prueba2 = this.prueba.substring(this.indice1a,this.indice2a);
	return this.prueba2;
	}

//fin extraer del objeto seleccionado solo el texto en español
 
	
	
}
