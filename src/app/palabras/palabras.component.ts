import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MostrarService } from '../mostrar.service';
import { ClearService } from '../clear.service';
import { CompararService } from '../comparar.service';
import { GuardartextoService } from '../guardartexto.service';




@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})

export class PalabrasComponent implements OnInit {

constructor(private route: ActivatedRoute,
				private location: Location,
					
						public clearService: ClearService,
							public compararService: CompararService,
								public guardartextoService: GuardartextoService,
										public mostrarService: MostrarService) { }


arrayPalabra: string[] = [];
arrayRespuesta: string[] = [];
palabraseleccionada: string = '';
respuestacomparar: string = ''; 
nuevoArray: string[] = [];
aciertos: number = 0;
percentAciertos: number = 0;
mostrarIndicador:string = '';
mensajedealerta: string = '';

@Input() secuenciaI:number[] = [0];
@Input() secuenciaF:number[] = [0];


      // INICIO para definir el componente a utilizar random o secuencial
@Input() numeroingresado:number = -1;              // por defecto el -1 lleva al componente Random, en caso de que usuario ingresa un numero el validador asigna valor igual o mayor que 0 y se activa el Secuencia component
@Input() inicialingresado:number= 0;
random?:boolean;
secuencial?:boolean;


		goBack(): void {
		this.location.back();
		}
		
	ngOnInit(){
	this.mostrarService.show = false;
	this.randomFn();
	this.secuencialFn();
	this.onClearPercent();
	} 
	
	randomFn(){
	if (this.numeroingresado <0){
	this.random = true;
	}
	}
	
	secuencialFn(){
	if (this.numeroingresado >=0){
	this.secuencial = true;
	}
	}
	
    // FIN para definir el componente a utilizar random o secuencial

	mensaje():string{
	this.mensajedealerta = this.clearService.clear(this.mensajedealerta);    	
		
		if ( this.guardartextoService.palabraseleccionada == ''){
		this.mensajedealerta = 'Não gerou uma palavra para comparar';
		return this.mensajedealerta;
		}else{	
			if ( this.guardartextoService.textodefinitivo == ''){
			this.mensajedealerta = 'Não escreveu dados para comparação';
			return this.mensajedealerta;
				}else{
				this.mensajedealerta = '';
				return this.mensajedealerta;
				}
			}
	}
		
		
	
		onComparar(): string[] | undefined | number | string | boolean {
		this.mensajedealerta = this.mensaje();
		do {
		this.palabraseleccionada = this.guardartextoService.palabraseleccionada;
		this.respuestacomparar = this.guardartextoService.textodefinitivo;
		this.arrayPalabra = this.compararService.crearArray(this.palabraseleccionada);
		this.arrayRespuesta = this.compararService.crearArray(this.respuestacomparar);
		this.nuevoArray = this.compararService.comparandoArrays(this.arrayPalabra,this.arrayRespuesta);
		this.aciertos = this.compararService.aciertos(this.nuevoArray);
		this.percentAciertos = this.compararService.porcentaje(this.nuevoArray,this.aciertos);
		this.mostrarIndicador = this.compararService.indicador(this.nuevoArray,this.percentAciertos);
		this.compararService.gradoA = this.compararService.activarGradoA(this.percentAciertos);   // unicamente para la animacion del random component
		this.compararService.siguiente = this.nuevoArray;
		
		return this.arrayPalabra;
		return this.arrayRespuesta;
		return this.nuevoArray;
		return this.aciertos;
		return this.percentAciertos;
		return this.mostrarIndicador;
		return this.compararService.siguiente;
		return this.compararService.gradoA;   // unicamente para la animacion del random component
		
			} while(this.mensajedealerta == '')
		}
	
	
	

onClear(){
this.palabraseleccionada = this.clearService.clear(this.palabraseleccionada);
this.respuestacomparar = this.clearService.clear(this.respuestacomparar);
this.mensajedealerta = this.clearService.clear(this.mensajedealerta);           /* al hacer click en generar palabra borra cualquier mensaje de alerta previo y datos anteriores */              
this.arrayPalabra = this.clearService.clearArray(this.arrayPalabra);
this.arrayRespuesta = this.clearService.clearArray(this.arrayRespuesta);
this.nuevoArray = this.clearService.clearArray(this.nuevoArray);
this.aciertos = this.clearService.clearNro(this.aciertos);
this.percentAciertos = this.clearService.clearNro(this.percentAciertos);
this.mostrarIndicador = this.clearService.clear(this.mostrarIndicador);
}

cierrefinal(){                                                   // esta funcion es llamada por el final de la secuencia de varias palabras
this.palabraseleccionada = this.clearService.clear(this.palabraseleccionada);
this.respuestacomparar = this.clearService.clear(this.respuestacomparar);
this.mensajedealerta = this.clearService.clear(this.mensajedealerta);                       
this.arrayPalabra = this.clearService.clearArray(this.arrayPalabra);
this.arrayRespuesta = this.clearService.clearArray(this.arrayRespuesta);
this.nuevoArray = this.clearService.clearArray(this.nuevoArray);
this.aciertos = this.clearService.clearNro(this.aciertos);
this.percentAciertos = this.clearService.clearNro(this.percentAciertos);
this.mostrarIndicador = this.clearService.clear(this.mostrarIndicador);
}
	
onClearPercent(){
this.aciertos = this.clearService.clearNro(this.aciertos);
this.percentAciertos = this.clearService.clearNro(this.percentAciertos);
this.mostrarIndicador = this.clearService.clear(this.mostrarIndicador);
this.compararService.siguiente = this.clearService.clearArray(this.compararService.siguiente);
this.compararService.contar = this.clearService.clearNro(this.compararService.contar);
this.compararService.percentAciertos = this.clearService.clearNro(this.compararService.percentAciertos);
this.compararService.mostrarIndicador = this.clearService.clear(this.compararService.mostrarIndicador);
}

}

