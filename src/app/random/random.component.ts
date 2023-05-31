import { Component, Output, EventEmitter, OnInit} from '@angular/core';

import { ClearService } from '../clear.service';
import { GuardartextoService } from '../guardartexto.service';
import { MensajeService } from '../mensaje.service';
import { RandomService } from '../random.service';
import { TecladoService } from '../teclado.service';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {

	constructor(public clearService: ClearService,
					public guardartextoService: GuardartextoService,
						public mensajeService: MensajeService,   // solamente define el título de la página de ejercicios correspondiente
							private randomService: RandomService,
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
	ptpalabraseleccionada: string ='';

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=13;
	finalnivel:number=14;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios

	funcion(){                                            /* utiliza las listas de palabras importadas por el randomService para seleccionar una sola */
	this.respuesta = this.clearService.clear(this.respuesta);                                                           /* borra los textos anteriores para comenzar un nuevo ingreso de texto */
	this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo);       /* borra los textos anteriores para comenzar un nuevo ingreso de texto */
		
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
	this.ptpalabraseleccionada = this.ptpalabras.toString();
	this.ptpalabraseleccionada = this.guardartextoService.depurar(this.ptpalabraseleccionada);           // extrae de la palabra seleccionada los signos ?¿ y ,
	this.ptpalabraseleccionada = this.guardartextoService.guardarSeleccion(this.ptpalabraseleccionada);  // guarda la palabraseleccionada(convertida en mayuscula) para COMPARAR
	this.show = false;
	}

	show = false;    /* se inicializa en false para que la respuesta este oculta   */
	
	ngOnInit() {
	this.onGuardartexto();
	this.ptpalabraseleccionada ='';
	this.guardartextoService.palabraseleccionada == '';
	this.tecladoService.nivelcategoria = this.inicialnivel;    //para definir el teclado a utilizar
	}
	
	onGuardartexto():string {
	this.respuesta = this.guardartextoService.depurar(this.tecladoService.textodefinitivo);    //  extrae del texto ingresado los caracteres especiales
	this.tecladoService.array = this.clearService.clearArray(this.tecladoService.array);
	this.tecladoService.arraytexto = this.clearService.clear(this.tecladoService.arraytexto);
	this.respuesta = this.guardartextoService.guardarDefinitivo(this.respuesta);   // guarda el texto ingresado(convertido en mayuscula) para COMPARAR
	return this.respuesta;
	}

}	
	
	/* }EJERCICIO 2 - OUTPUT
	onNotify() {
    window.alert('Submitted');
	} */
	
	/* EJERCICIO UTILIZANDO UNA LISTA DE PALABRAS CON VARIOS CAMPOS
	necesarias para la lista ngFor -previamente se debe importar el archivo PALABRAS
	palabra: Palabra[] = PALABRAS;
	palabras = PALABRAS; */ 
	
	



