import { Injectable, OnInit } from '@angular/core';

import { Testbase } from './testbase';
import { BASEPARATESTS } from './BASEPARATESTS';
import { BASEPARATESTS2 } from './BASEPARATESTS2';
import { BASEPARATESTS3 } from './BASEPARATESTS3';
import { BASEPARATESTSPT } from './BASEPARATESTSPT';
import { BASEPARATESTSPT2 } from './BASEPARATESTSPT2';


@Injectable({
  providedIn: 'root'
})
export class ServitestService implements OnInit{

  constructor() { }
  
  // contiene las preguntas y respuestas de los diferentes tests

testbase: Testbase[] = BASEPARATESTS;
testbases = BASEPARATESTS;



	ngOnInit(){
	this.captarTest();      // capta la base de datos de los TEST
	this.captarTest2();
	this.captarTest3();
	this.captarTest4();
	this.captarTest5();
	}

	captarTest(): Testbase[]{
	this.testbases = BASEPARATESTS;
	return this.testbases;
	}
	
	captarTest2(): Testbase[]{
	this.testbases = BASEPARATESTS2;
	return this.testbases;
	}
	
	captarTest3(): Testbase[]{
	this.testbases = BASEPARATESTS3;
	return this.testbases;
	}
	
	captarTest4(): Testbase[]{
	this.testbases = BASEPARATESTSPT;
	return this.testbases;
	}
	
	captarTest5(): Testbase[]{
	this.testbases = BASEPARATESTSPT2;
	return this.testbases;
	}
	
	

	// selecciona un solo test de la base de datos y lo convierte en string
prueba:string='';
	testSeleccionado: Testbase[]= [];
	seleccionarTEST<Type>(arg:number):string{
	if (arg==0){
		this.testSeleccionado = [];		
		}else{	
		this.testSeleccionado = this.testbases.filter( (obj) => { return ( obj.testID === arg ) } );
		}
	this.prueba = JSON.stringify(this.testSeleccionado);
	return this.prueba;
	}

    // inicio crear un array independiente con las tres opciones a escoger
opciones:string[]=[]
indice1:number = 0;
indice2:number = 0;
indice1a:number = 0;
indice2a:number = 0;
opcion:string = '';

	arrayOpciones<Type>(arg1:string|undefined,arg2:string,arg3:string,arg4:string,arg5:string):string[]{
	if (arg1==''||arg1==undefined){
		this.opciones = [];		
		}else{
		this.opciones = [];	
		
		this.indice1 = arg1.indexOf(arg2);
		this.indice2 = arg1.indexOf(arg3);
		this.indice1a = this.indice1+11;
		this.indice2a = this.indice2-3;
		this.opcion = arg1.substring(this.indice1a,this.indice2a);
		this.opciones.push(this.opcion);
		
		this.indice1 = arg1.indexOf(arg3);
		this.indice2 = arg1.indexOf(arg4);
		this.indice1a = this.indice1+11;
		this.indice2a = this.indice2-3;
		this.opcion = arg1.substring(this.indice1a,this.indice2a);
		this.opciones.push(this.opcion);
		
		this.indice1 = arg1.indexOf(arg4);
		this.indice2 = arg1.indexOf(arg5);
		this.indice1a = this.indice1+11;
		this.indice2a = this.indice2-3;
		this.opcion = arg1.substring(this.indice1a,this.indice2a);
		this.opciones.push(this.opcion);
		}
	return this.opciones;
	}
   // fin crear un array independiente

   // inicio definir respuesta
re1:number = 0;
re2:number = 0;
re1a:number = 0;
re2a:number = 0;
respuestaTest:string='';	
 
 definirRespuesta<Type>( arg1:string|undefined, arg2:string, arg3:string): string {
	if (arg1==''||arg1==undefined){
		this.respuestaTest = '';		
		}else{
		this.respuestaTest = '';	
		
		this.re1 = arg1.indexOf(arg2);
		this.re2 = arg1.indexOf(arg3);
		this.re1a = this.re1+13;
		this.re2a = this.re2-3;
		this.respuestaTest = arg1.substring(this.re1a,this.re2a);
		
		}
	return this.respuestaTest;
	}
  // fin definir respuesta
  
  
  
  // inicio contar las preguntas activas del test
  
  
 contador1:number=0; 
 suma1:number=0;
  totalPreguntas<Type>(arg:string|undefined):number{
	this.contador1=0;
	if (arg == ''|| arg == undefined){
		this.contador1 = 0;                                             // si no hay datos no es una pregunta activa del test
		}else{
		this.contador1 = 1;
		}
	this.suma1 = this.suma1+this.contador1;	
	return this.suma1;
	}
  
 // inicio contar las preguntas acertadas por el usuarios
 
 contador2:number=0;
 suma2:number=0;
   totalAciertos<Type>(arg1:string|undefined,arg2:string|undefined):number{
	this.contador2=0;
	if (arg1 == ''){
	this.contador2=0;
	} else{
		if (arg1 == arg2 ){
		this.contador2 = 1;                                             
		}else{
		this.contador2 = 0;
		}
	  }	
	this.suma2 = this.suma2+this.contador2;	
	return this.suma2; 
   }
   
   // asignar indicador correcto o incorrecto
   
 indicador:string='';
   asignaIndicador<Type>(arg1:string|undefined,arg2:string|undefined):string{
	this.indicador='';
	if (arg1 == ''){
	this.indicador='';
	} else{
		if (arg1 == arg2 ){
		this.indicador='\u2713';                                            
		}else{
		this.indicador='incorrecto';
		}
	  }	
	return this.indicador; 
   }
   
   // activar grado
   
  activarGrado<Type>(arg:string):boolean{
     if (arg == 'A'){
	 this.gradoA=true;
	 }else{
	 this.gradoA=false;
	 }
  return this.gradoA;
  }
  
     // activar principiante
  
  activarPrincipiante<Type>(arg:string):boolean{
     if (arg == 'principiante' || arg == 'principiantePT' ){
	 this.principiante=true;
	 }else{
	 this.principiante=false;
	 }
  return this.principiante;
  }
   
  // guarda todas las propiedades para poder ser inicializadas correctamente
  
  
indicadorA:string='';
indicadorB:string='';
indicadorC:string='';
indicadorD:string='';
indicadorE:string='';
indicadorF:string='';
indicadorG:string='';
indicadorH:string='';
indicadorI:string='';

sumadePreguntas:number=0;                  
sumadeAciertos:number=0;
percentAciertos:number=0;
porcentaje:boolean=false;
grado:string='';
gradoA:boolean=false;
pubTest:boolean=false;
principiante:boolean=false;
porcentajeMostrar:number=0;

        // variables provisionales
isChecked:boolean=true;   // para ocultar y mostrar los test disponibles
Aoptions:string[]=[];
respuestaA:string='';
Boptions:string[]=[];
respuestaB:string='';
Coptions:string[]=[];
respuestaC:string='';
Doptions:string[]=[];
respuestaD:string='';
Eoptions:string[]=[];
respuestaE:string='';
Foptions:string[]=[];
respuestaF:string='';
Goptions:string[]=[];
respuestaG:string='';
Hoptions:string[]=[];
respuestaH:string='';
Ioptions:string[]=[];
respuestaI:string='';

	// borra los datos anteriores relacionados con la interaccion del usuario
borrarPrevios(){
this.sumadePreguntas = 0;
this.sumadeAciertos = 0;
this.suma1 = 0;
this.suma2 = 0;
this.percentAciertos=0;
this.porcentaje=false;
this.grado='';
this.gradoA=false;
this.pubTest=false;
this.porcentajeMostrar=0;

this.indicadorA='';
this.indicadorB='';
this.indicadorC='';
this.indicadorD='';
this.indicadorE='';
this.indicadorF='';
this.indicadorG='';
this.indicadorH='';
this.indicadorI='';

}
  
  
}
