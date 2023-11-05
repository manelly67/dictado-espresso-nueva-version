import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { ClearService } from '../clear.service';
import { GuardartextoService } from '../guardartexto.service';
import { MensajeService } from '../mensaje.service';
import { RandomService } from '../random.service';
import { CompararService } from '../comparar.service';
import { TecladoService } from '../teclado.service';

@Component({
  selector: 'app-es-random',
  templateUrl: './es-random.component.html',
  styleUrls: ['./es-random.component.css']
})
export class EsRandomComponent implements OnInit {


	constructor(public clearService: ClearService,
					public guardartextoService: GuardartextoService,
						public mensajeService: MensajeService,   // solamente define el título de la página de ejercicios correspondiente
							private randomService: RandomService,
								public compararService: CompararService,    // unicamente para leer variable gradoA para activar animacion
									public tecladoService: TecladoService) { }


@Output() comparar = new EventEmitter (); 
@Output() borrar = new EventEmitter ();

	
	respuesta = '';
	                                           
	final: number =0;
	inicial: number = 0;
	espalabra: string ='';
	espalabras: string[]= [];
	ptpalabra: string ='';
	ptpalabras: string[]= [];
	enpalabra: string ='';
	enpalabras: string[]= [];
	espalabraseleccionada: string ='';
	
	/* en:boolean = true; evaluando agregar o no */

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=3;
	finalnivel:number=4;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios

	funcion(){                                            /* utiliza las listas de palabras importadas por el randomService para seleccionar una sola */
	this.respuesta = this.clearService.clear(this.respuesta);                                                           /* borra los textos anteriores para comenzar un nuevo ingreso de texto */
	this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo);       /* borra los textos anteriores para comenzar un nuevo ingreso de texto */
	this.compararService.gradoA = false;    // para reiniciar la variable de la animacion del random component
	
				this.final = this.randomService.numeroFinal();
				this.inicial = this.randomService.numeroInicial();
		
	this.espalabra = this.randomService.espalabra ;
	this.espalabras = this.randomService.captarDatosES();
	this.espalabras = this.espalabras.slice(this.inicial,this.final) ;
	this.ptpalabra = this.randomService.ptpalabra ;
	this.ptpalabras = this.randomService.captarDatosPT();
	this.ptpalabras = this.ptpalabras.slice(this.inicial,this.final) ;
	this.enpalabra = this.randomService.enpalabra ;
	this.enpalabras = this.randomService.captarDatosEN();
	this.enpalabras = this.enpalabras.slice(this.inicial,this.final) ;
	this.espalabraseleccionada = this.espalabras.toString();
	this.espalabraseleccionada = this.guardartextoService.depurar(this.espalabraseleccionada);           // extrae de la palabra seleccionada los signos ?¿ y ,
	this.espalabraseleccionada = this.guardartextoService.guardarSeleccion(this.espalabraseleccionada);  // guarda la palabraseleccionada(convertida en mayuscula) para COMPARAR
	this.show = false;
	}

	show = false;    /* se inicializa en false para que la respuesta este oculta   */
	
	ngOnInit() {
	this.onGuardartexto();
	this.espalabraseleccionada ='';
	this.guardartextoService.palabraseleccionada == '';
	this.tecladoService.nivelcategoria = this.inicialnivel;     //para definir el teclado a utilizar
	this.compararService.gradoA = false;    // para reiniciar la variable de la animacion del random component	
	}
	
	onGuardartexto():string {
	this.respuesta = this.guardartextoService.depurar(this.tecladoService.textodefinitivo);    //  extrae del texto ingresado los caracteres especiales
	this.tecladoService.array = this.clearService.clearArray(this.tecladoService.array);
	this.tecladoService.arraytexto = this.clearService.clear(this.tecladoService.arraytexto);
	this.respuesta = this.guardartextoService.guardarDefinitivo(this.respuesta);   // guarda el texto ingresado(convertido en mayuscula) para COMPARAR
	return this.respuesta;
	}

}
