import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

import { ServitestService } from '../servitest.service';
import { CompararService } from '../comparar.service';
import { Testbase } from '../testbase';

@Component({
  selector: 'app-base-de-test',
  templateUrl: './base-de-test.component.html',
  styleUrls: ['./base-de-test.component.css'],
  animations: [
    trigger('slideStatus', [ 
      transition(':enter', [
        animate('6s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' })
		  
        ])),
      ]),   
    ]),
	trigger('slideStatusPub', [ 
      transition(':enter', [
        animate('6s', keyframes([
		
		  style({ backgroundColor: 'orange' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'white' }),
		  style({ backgroundColor: 'orange' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' }),
		  style({ backgroundColor: 'white' }),
          style({ backgroundColor: 'red' })
		  
        ])),
      ]),   
    ])
	]
})

export class BaseDeTestComponent {

constructor ( private formBuilder:FormBuilder,
				public servitestService:ServitestService,
					private compararService:CompararService    // solo para formatear y mostrar el porcentaje
															){}

checkoutForm = new FormGroup({
  escribe: new FormControl(''),
  });
  
@Output() resetear = new EventEmitter();

@Input() nivel:string = '';
@Input() inicialnivel:number=0;
@Input() definirinicial:number=0;
@Input() definirfinal:number=0;

@Input() testseleccionado:string='';
@Input() Aoptions:string[]=[];
@Input() respuestaA:string='';
@Input() Boptions:string[]=[];
@Input() respuestaB:string='';
@Input() Coptions:string[]=[];
@Input() respuestaC:string='';
@Input() Doptions:string[]=[];
@Input() respuestaD:string='';
@Input() Eoptions:string[]=[];
@Input() respuestaE:string='';
@Input() Foptions:string[]=[];
@Input() respuestaF:string='';
@Input() Goptions:string[]=[];
@Input() respuestaG:string='';
@Input() Hoptions:string[]=[];
@Input() respuestaH:string='';
@Input() Ioptions:string[]=[];
@Input() respuestaI:string='';
@Input() testbase?: Testbase[];
@Input() testbases?: Testbase[];


/* isDisabled:boolean=false; esta es una propiedad de mat-radio-group no se utiliza en este ejemplo */

/* isChecked:boolean=false; esta es una propiedad de mat-radio-buttom no se utiliza en este ejemplo */


//capta seleccionA
Aop:string='';
seleccionA: string = '';
	onKeyA(event:any) { // without type info
    this.seleccionA  = event.target.value;	
	} 
	
//capta seleccionB
Bop:string='';
seleccionB: string = '';
	onKeyB(event:any) { // without type info
    this.seleccionB  = event.target.value;	
	} 
	
//capta seleccionC
Cop:string='';
seleccionC: string = '';
	onKeyC(event:any) { // without type info
    this.seleccionC  = event.target.value;	
	} 
	
//capta seleccionD
Dop:string='';
seleccionD: string = '';
	onKeyD(event:any) { // without type info
    this.seleccionD  = event.target.value;	
	} 
	
//capta seleccionE
Eop:string='';
seleccionE: string = '';
	onKeyE(event:any) { // without type info
    this.seleccionE  = event.target.value;	
	} 
	
//capta seleccionF
Fop:string='';
seleccionF: string = '';
	onKeyF(event:any) { // without type info
    this.seleccionF  = event.target.value;	
	} 
	
//capta seleccionG
Gop:string='';
seleccionG: string = '';
	onKeyG(event:any) { // without type info
    this.seleccionG  = event.target.value;	
	} 
	
//capta seleccionH
Hop:string='';
seleccionH: string = '';
	onKeyH(event:any) { // without type info
    this.seleccionH  = event.target.value;	
	} 
	
//capta seleccionI
Iop:string='';
seleccionI: string = '';
	onKeyI(event:any) { // without type info
    this.seleccionI  = event.target.value;	
	} 

	


OnSubmit(){

 // inicia determinar preguntas y aciertos
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaA);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaA,this.seleccionA);
this.servitestService.indicadorA = this.servitestService.asignaIndicador(this.respuestaA,this.seleccionA);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaB);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaB,this.seleccionB);
this.servitestService.indicadorB = this.servitestService.asignaIndicador(this.respuestaB,this.seleccionB);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaC);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaC,this.seleccionC);
this.servitestService.indicadorC = this.servitestService.asignaIndicador(this.respuestaC,this.seleccionC);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaD);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaD,this.seleccionD);
this.servitestService.indicadorD = this.servitestService.asignaIndicador(this.respuestaD,this.seleccionD);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaE);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaE,this.seleccionE);
this.servitestService.indicadorE = this.servitestService.asignaIndicador(this.respuestaE,this.seleccionE);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaF);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaF,this.seleccionF);
this.servitestService.indicadorF = this.servitestService.asignaIndicador(this.respuestaF,this.seleccionF);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaG);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaG,this.seleccionG);
this.servitestService.indicadorG = this.servitestService.asignaIndicador(this.respuestaG,this.seleccionG);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaH);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaH,this.seleccionH);
this.servitestService.indicadorH = this.servitestService.asignaIndicador(this.respuestaH,this.seleccionH);
this.servitestService.sumadePreguntas = this.servitestService.totalPreguntas(this.respuestaI);
this.servitestService.sumadeAciertos = this.servitestService.totalAciertos(this.respuestaI,this.seleccionI);
this.servitestService.indicadorI = this.servitestService.asignaIndicador(this.respuestaI,this.seleccionI);

 // determinar y formatear el porcentaje y la animacion
this.servitestService.percentAciertos = (this.servitestService.sumadeAciertos/this.servitestService.sumadePreguntas)*100;
this.servitestService.porcentaje = this.compararService.porcentajeBoolean(this.servitestService.percentAciertos);
this.servitestService.grado = this.compararService.graduacion(this.servitestService.percentAciertos);
this.servitestService.porcentajeMostrar = this.compararService.porcentajeMostrar(this.servitestService.percentAciertos);
this.servitestService.gradoA = this.servitestService.activarGrado(this.servitestService.grado);
this.servitestService.principiante = this.servitestService.activarPrincipiante(this.nivel);
this.servitestService.pubTest = true;

 // archiva provisionalmente el test 
 
this.servitestService.Aoptions=this.Aoptions;
this.servitestService.Boptions=this.Boptions;
this.servitestService.Coptions=this.Coptions;
this.servitestService.Doptions=this.Doptions;
this.servitestService.Eoptions=this.Eoptions;
this.servitestService.Foptions=this.Foptions;
this.servitestService.Goptions=this.Goptions;
this.servitestService.Hoptions=this.Hoptions;
this.servitestService.Ioptions=this.Ioptions;
this.servitestService.respuestaA=this.respuestaA;
this.servitestService.respuestaB=this.respuestaB;
this.servitestService.respuestaC=this.respuestaC;
this.servitestService.respuestaD=this.respuestaD;
this.servitestService.respuestaE=this.respuestaE;
this.servitestService.respuestaF=this.respuestaF;
this.servitestService.respuestaG=this.respuestaG;
this.servitestService.respuestaH=this.respuestaH;
this.servitestService.respuestaI=this.respuestaI;

}

borrarPrevios(){
 // borra datos anteriores relacionados con la interaccion del usuario
this.servitestService.borrarPrevios();
}

borrarSeleccion(){
 // borrar lo seleccionado
this.seleccionA = '';
this.seleccionB = '';
this.seleccionC = '';
this.seleccionD = '';
this.seleccionE = '';
this.seleccionF = '';
this.seleccionG = '';
this.seleccionH = '';
this.seleccionI = '';
}

  
}
