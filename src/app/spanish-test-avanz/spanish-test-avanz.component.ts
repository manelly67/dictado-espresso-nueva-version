import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MostrarService } from '../mostrar.service';
import { MensajeService } from '../mensaje.service';
import { ServitestService } from '../servitest.service';

@Component({
  selector: 'app-spanish-test-avanz',
  templateUrl: './spanish-test-avanz.component.html',
  styleUrls: ['./spanish-test-avanz.component.css']
})
export class SpanishTestAvanzComponent implements OnInit{

constructor( private route:ActivatedRoute,
				private location:Location,
					private mostrarService:MostrarService,
						public mensajeService:MensajeService,    // solamente define el título de la página de ejercicios correspondiente
							public servitestService:ServitestService	
																	){}


ngOnInit(){
this.mostrarService.show = false;
this.servitestService.isChecked=true;
this.servitestService.gradoA=false;
this.servitestService.porcentaje=false;
}

goBack():void{
this.location.back();
}

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=26;
	finalnivel:number=27;
	espacio:string=' - ';
	nivelAjustado:number=1;
	// final definir título superior de la categoría de la página de ejercicios

nivel:string='avanzado';
nro:number=0;

	// inicio captar base de datos de Test
testbase = this.servitestService.testbase;
testbases = this.servitestService.captarTest3();
	// fin captar base de datos de Test

definirtestinicial:number=0;
definirtestfinal:number=0;

testseleccionado:string='';
arrayA:string[]=[];
respuestaA:string='';
arrayB:string[]=[];
respuestaB:string='';
arrayC:string[]=[];
respuestaC:string='';
arrayD:string[]=[];
respuestaD:string='';
arrayE:string[]=[];
respuestaE:string='';
arrayF:string[]=[];
respuestaF:string='';
arrayG:string[]=[];
respuestaG:string='';
arrayH:string[]=[];
respuestaH:string='';
arrayI:string[]=[];
respuestaI:string='';




definirTest(i:number){ 

  this.nro = i;  
  this.definirtestfinal = this.nro;
  this.definirtestinicial = this.nro-1;
  this.testseleccionado = this.servitestService.seleccionarTEST(this.definirtestfinal);
  this.arrayA = this.servitestService.arrayOpciones(this.testseleccionado,'opcionA1','opcionA2','opcionA3','respuestaA');
  this.respuestaA = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaA','preguntaB');
  this.arrayB = this.servitestService.arrayOpciones(this.testseleccionado,'opcionB1','opcionB2','opcionB3','respuestaB');
  this.respuestaB = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaB','preguntaC');
  this.arrayC = this.servitestService.arrayOpciones(this.testseleccionado,'opcionC1','opcionC2','opcionC3','respuestaC');
  this.respuestaC = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaC','preguntaD');
  this.arrayD = this.servitestService.arrayOpciones(this.testseleccionado,'opcionD1','opcionD2','opcionD3','respuestaD');
  this.respuestaD = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaD','preguntaE');
  this.arrayE = this.servitestService.arrayOpciones(this.testseleccionado,'opcionE1','opcionE2','opcionE3','respuestaE');
  this.respuestaE = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaE','preguntaF');
  this.arrayF = this.servitestService.arrayOpciones(this.testseleccionado,'opcionF1','opcionF2','opcionF3','respuestaF');
  this.respuestaF = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaF','preguntaG');
  this.arrayG = this.servitestService.arrayOpciones(this.testseleccionado,'opcionG1','opcionG2','opcionG3','respuestaG');
  this.respuestaG = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaG','preguntaH');
  this.arrayH = this.servitestService.arrayOpciones(this.testseleccionado,'opcionH1','opcionH2','opcionH3','respuestaH');
  this.respuestaH = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaH','preguntaI');
  this.arrayI = this.servitestService.arrayOpciones(this.testseleccionado,'opcionI1','opcionI2','opcionI3','respuestaI');
  this.respuestaI = this.servitestService.definirRespuesta(this.testseleccionado,'respuestaI','final');
  
  this.servitestService.isChecked=false;
}

onClear(){
//borrar datos anteriores relacionados con el TEST
this.testseleccionado='';
this.arrayA=[];
this.respuestaA='';
this.arrayB=[];
this.respuestaB='';
this.arrayC=[];
this.respuestaC='';	
this.arrayD =[];
this.respuestaD ='';
this.arrayE =[];
this.respuestaE ='';
this.arrayF =[];
this.respuestaF ='';
this.arrayG =[];
this.respuestaG ='';
this.arrayH =[];
this.respuestaH ='';
this.arrayI =[];
this.respuestaI ='';
}


borrarPrevios(){
 // borra datos anteriores relacionados con las respuestas del usuario
this.servitestService.borrarPrevios();
}

mostrar(){
this.servitestService.isChecked=true;
}



}
