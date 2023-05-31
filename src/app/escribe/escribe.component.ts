import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { ClearService } from '../clear.service';
import { CompararService } from '../comparar.service';
import { TecladoService } from '../teclado.service';



@Component({
  selector: 'app-escribe',
  templateUrl: './escribe.component.html',
  styleUrls: ['./escribe.component.css'],
})

export class EscribeComponent implements OnInit{

constructor(public clearService: ClearService,
				public compararService: CompararService,		
					public tecladoService: TecladoService ) { }


@Output() guardartexto = new EventEmitter ();
@Output() secuencia = new EventEmitter ();
@Output() resalta = new EventEmitter (); 
@Output() lista = new EventEmitter ();                        
                                                              /* Este componente capta todo lo ingresado por teclado y por las teclas de caracteres especiales junto a tecladoService
															     y el textodefinitivo se envía a traves de tecladoService y el Output guardartexto para ser guardado para la comparacion */
letra = '?';
arraytexto = '';
array:string[] = [];
arrayprov:string = '';
// agregado
label1:string = '';

showSP?:boolean;
showPT?:boolean;

ngOnInit(){
	this.showPT = this.tecladoService.definirTecladoPT(this.tecladoService.nivelcategoria);
	this.showSP = this.tecladoService.definirTecladoSP(this.tecladoService.nivelcategoria);
	this.definirEtiqueta1();
}
	// inicio definir etiquetas 
	definirEtiqueta1():string{
	if (this.showSP == true){
	this.label1 = 'Escribe tu respuesta y [ENTER] ';
	this.compararService.label2 = 'Esta es tu respuesta:';
	}else{
	if (this.showPT == true){
	this.label1 = 'Escreva a sua resposta e [ENTER] ';
	this.compararService.label2 = 'Esta é a tua resposta:';
	}}
	return this.label1;
	return this.compararService.label2;
	}
// fin agregado

	onKey2(event:any) { // without type info
    this.arraytexto  = event.target.value;	
	} 
	
	actualizar(){                            /* cuando se hace blur y click en un caracter especial */
	this.arrayprov = this.arraytexto;
	this.tecladoService.array = [];
	this.tecladoService.array.push(this.arrayprov);
	this.array = this.tecladoService.array;
	this.arraytexto = this.array.toString();
	this.arraytexto = this.arraytexto.replace(/(,)/gm, "");	       // extrae del array convertido a texto solo las comas
	this.tecladoService.textodefinitivo = this.arraytexto;
	}
	
	actualizar2(){                            /* cuando se ingresa el texto con enter */
	this.tecladoService.array.push(this.arraytexto);
	this.array = this.tecladoService.array.slice(-1);
	this.arraytexto = this.array.toString();
	this.arraytexto = this.arraytexto.replace(/(,)/gm, "");        // extrae del array convertido a texto solo las comas
	this.tecladoService.textodefinitivo = this.arraytexto;
	}
 
   
	onNotifyA1(){
	this.letra = 'à';	this.definir();
	}
	onNotifyA2(){
	this.letra = 'á'; 	this.definir();
	}
	onNotifyA3(){
	this.letra = 'â';	this.definir();
	}
	onNotifyA4(){
	this.letra = 'ã'; 	this.definir();                
	}
	onNotifyC(){
	this.letra = 'ç';	this.definir();          
	}
	onNotifyE1(){
	this.letra = 'é'; 	this.definir();
	}
	onNotifyE2(){
	this.letra = 'ê';	this.definir();
	}
	onNotifyI(){
	this.letra = 'í'; 	this.definir();
	}
	onNotifyO1(){
	this.letra = 'ó';	this.definir();
	}
	onNotifyO2(){
	this.letra = 'ô'; 	this.definir();
	}
	onNotifyO3(){
	this.letra = 'õ'; 	this.definir();
	}
	onNotifyU1(){
	this.letra = 'ú'; 	this.definir();
	}
	onNotifyU2(){
	this.letra = 'ü'; 	this.definir();
	}
	onNotifyN(){
	this.letra = 'ñ'; 	this.definir();
	}
	onNotifyInterr(){
	this.letra = '¿'; 	this.definir();
	}
	onNotifyExclam(){
	this.letra = '¡'; 	this.definir();
	}
	
	
		
	definir(){
	this.tecladoService.array.push(this.letra);
	this.array = this.tecladoService.array;
	this.arraytexto = this.array.toString();
	this.arraytexto = this.arraytexto.replace(/(,)/gm, "");       // extrae del array convertido a texto solo las comas
	this.tecladoService.textodefinitivo = this.arraytexto;
	}

	borrar(){                                                      // borra el texto ingresado cuando ya se ha enviado la respuesta - submit button
	this.array = this.clearService.clearArray(this.array);
	this.arraytexto = this.clearService.clear(this.arraytexto);
	this.tecladoService.textodefinitivo = this.clearService.clear(this.tecladoService.textodefinitivo);
	this.compararService.nuevoArray = this.clearService.clearArray(this.compararService.nuevoArray);
	this.compararService.contar = this.clearService.clearNro(this.compararService.contar);
	this.compararService.percentAciertos = this.clearService.clearNro(this.compararService.percentAciertos);
	this.compararService.mostrarIndicador = this.clearService.clear(this.compararService.mostrarIndicador);
	}



}



/* EJERCICIO 1 - FORMA
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms' */



/* EJERCICIO 1 - FORMA
  constructor( private formBuilder:FormBuilder,  ){}
  
  checkoutForm = new FormGroup({
  escribe: new FormControl('', Validators.minLength(2)),
  });
   */
   /* EJERCICIO 1 - FORMA
    respuesta1:string = '?';
    OnSubmit():void{
	this.respuesta1 = 'funciona';
	 console.log(this.checkoutForm.value);  (muestra en la consola el valor del elemento)
	 console.log(this.checkoutForm.status); 
     this.checkoutForm.reset();
    } */
	
	/* EJERCICIO 2 - OUTPUT
   @Output() notify = new EventEmitter ();  
   este ejercicio separado es para un mensaje de alerta */

	/*EJERCICIO 3 - ONKEY $EVENT INPUT
	values = '';

    EJERCICIO 4 - otra sintaxis para entrada de datos
	onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
    } */
	
	 /*  EJERCICIO 4 - otra sintaxis para entrada de datos
	 onKey2(event:any) { // without type info
    this.values2  = event.target.value;
	this.len = this.values2.length;	
  } */
  
    /* EJERCICIO
	getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }  */






