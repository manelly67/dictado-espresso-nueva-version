import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

import { ClearService } from '../clear.service';
import { CompararService } from '../comparar.service';
import { GuardartextoService } from '../guardartexto.service';
import { MensajeService } from '../mensaje.service';
import { RandomService } from '../random.service';
import { TecladoService } from '../teclado.service';

@Component({
  selector: 'app-secuencial',
  templateUrl: './secuencial.component.html',
  styleUrls: ['./secuencial.component.css'],
  animations: [
    trigger('growUp', [ 
      transition(':enter', [
        animate('2s', keyframes([
		
		  style({ fontSize: '2rem' }),
          style({ fontSize: '2.2rem' }),
          style({ fontSize: '2.5rem' }),
		  style({ fontSize: '2.2rem' }),
          style({ fontSize: '2rem' })
          
        ])),
      ]),   
    ]),
	trigger('glow', [ 
	state('closed', style({
        backgroundColor: '#eee',
		color: 'black',
      })),
	state('open', style({
        backgroundColor: 'blue',
		fontSize: '1.9rem'
      })),  
     
	 transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ])
  ]
})

export class SecuencialComponent implements OnInit{


	constructor(public clearService: ClearService,
					 public compararService: CompararService,
						public guardartextoService: GuardartextoService,
							public mensajeService: MensajeService,   // solamente define el título de la página de ejercicios correspondiente
								private randomService: RandomService,
									public tecladoService: TecladoService) { }

@Output() comparar = new EventEmitter (); 
@Output() borrar = new EventEmitter ();    
@Output() cierrefinal = new EventEmitter ();
		// los datos recibidos por Input() vienen de ingresar-numero-component
@Input() numeroingresado:number=0;
@Input() inicialingresado:number=0;
@Input() secuenciaI:number[] = [0];
@Input() secuenciaF:number[] = [0];

	          			  
	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=16;
	finalnivel:number=17;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios
			  
	ngOnInit() {
	this.onGuardartexto();
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	this.iniciar = true;
	this.compararService.iniciar = true;
	this.resalta = false;
	this.tecladoService.nivelcategoria = this.inicialnivel;    //para definir el teclado a utilizar
	}
	
	mensajeinicial1:string='';
	mensajeinicial2:string='';
	longitud:number=0;
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
	resalta:boolean=false;
	
	// ACTIVA  y DESACTIVA resaltar y al mismo tiempo mostrar el boton SIGUIENTE
	
	onResalta(){
	if (this.guardartextoService.textodefinitivo != ''){
	this.resalta = true;
	}else{
	this.ultimo = this.secuenciaArray.slice((this.secuenciaArray.length-1),this.secuenciaArray.length).toString();
	this.agregar = this.guardartextoService.palabraseleccionada;
	if ((this.guardartextoService.textodefinitivo == '') && (this.ultimo.includes(this.agregar)==true) ){
	this.resalta = true;
	}else{}
	}}
	
	omitirResalta(){
	this.resalta = false;
	} 
	
	
	
	
	// OCULTA el boton INICIAR y MUESTRA de nuevo al final de la secuencia//
	iniciar:boolean=true;
	oculta(){
	if (this.numeroingresado != 0){
	this.iniciar = false;
	this.compararService.iniciar = false;
	this.uno = true;
	}else{
	this.iniciar = true;
	this.uno = false;
	}
	}
	
	muestra(){
	this.iniciar = true;
	this.compararService.iniciar = true;
	}
	// finaliza OCULTA y MUESTRA boton INICIAR//

	mensajeinicialES(){
	this.longitud = this.secuenciaI.length;
	 if(this.longitud < 2){
	 this.mensajeinicial1 ='';
	 }else{
	 this.mensajeinicial1 = ' '+ this.longitud +' palabras para tí';
	 }
	return this.mensajeinicial1;
	}
	
	mensajeinicialEN(){
	this.longitud = this.secuenciaI.length;
	 if(this.longitud < 2){
	 this.mensajeinicial2 ='';
	 }else{
	 this.mensajeinicial2 = ''+ this.longitud + ' words for you';
	 }
	return this.mensajeinicial2;
	}
	
	
	funcion(){                                            
	    // borra los textos anteriores para comenzar un nuevo ingreso de texto 				
	this.respuesta = this.clearService.clear(this.respuesta);                                                           
	this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo);
	this.secuenciaArray = this.clearService.clearArray(this.secuenciaArray);
	this.acertadas = this.clearService.clearNro(this.acertadas);
	this.porcentaje = false;
	this.compararService.siguiente = this.clearService.clearArray(this.compararService.siguiente);
	this.compararService.contar = this.clearService.clearNro(this.compararService.contar);
	this.compararService.percentAciertos = this.clearService.clearNro(this.compararService.percentAciertos);
	this.compararService.mostrarIndicador = this.clearService.clear(this.compararService.mostrarIndicador);
	this.uno = true;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	this.resalta = false;
		// termina inicializar las variables
	
				this.inicial = this.secuenciaI[0];          // esta funcion se aplica solo a la primera palabra del array
				this.final = this.secuenciaF[0];
	
	this.tomaPalabra(this.inicial,this.final);		   // deriva a la funcion que selecciona una sola palabra		
	this.show = false;

	this.mensajeinicial1 = this.mensajeinicialES();
	this.mensajeinicial2 = this.mensajeinicialEN();
	} 
	

	tomaPalabra<type>(arg1:number,arg2:number):string{                       // utiliza las listas de palabras importadas por el randomService para seleccionar una sola
	this.espalabra = this.randomService.espalabra ;
	this.espalabras = this.randomService.captarDatosES();
	this.espalabras = this.espalabras.slice(arg1,arg2) ;
	this.ptpalabra = this.randomService.ptpalabra ;
	this.ptpalabras = this.randomService.captarDatosPT();
	this.ptpalabras = this.ptpalabras.slice(arg1,arg2) ;
	this.enpalabra = this.randomService.enpalabra ;
	this.enpalabras = this.randomService.captarDatosEN();
	this.enpalabras = this.enpalabras.slice(arg1,arg2) ;
	this.ptpalabraseleccionada = this.ptpalabras.toString();
	this.ptpalabraseleccionada = this.guardartextoService.depurar(this.ptpalabraseleccionada);           // extrae de la palabra seleccionada los signos ?¿ y ,
	this.ptpalabraseleccionada = this.guardartextoService.guardarSeleccion(this.ptpalabraseleccionada);  // guarda la palabraseleccionada(convertida en mayuscula) para COMPARAR
	return this.ptpalabraseleccionada;
	}

	show = false;    /* se inicializa en false para que la respuesta este oculta   */
	
	
	
	onGuardartexto():string {
	this.respuesta = this.guardartextoService.depurar(this.tecladoService.textodefinitivo);    //  extrae del texto ingresado los caracteres especiales
	this.tecladoService.array = this.clearService.clearArray(this.tecladoService.array);
	this.tecladoService.arraytexto = this.clearService.clear(this.tecladoService.arraytexto);
	this.respuesta = this.guardartextoService.guardarDefinitivo(this.respuesta);   // guarda el texto ingresado(convertido en mayuscula) para COMPARAR
	return this.respuesta;
	}

	
	// Inicia emision de lista de cada resultado	y  secuencia de las siguientes palabras
	array: string[] = [];
	agregar:string ='';
	ultimo:string ='x';
	secuenciaArray:string[] = [];
	nsecuencia:string = '';
	lista?:boolean;
	
	onLista(){                            // define el momento de mostrar la lista con los resultados
	if (this.secuenciaArray[0] == ''){
					this.lista = false;
				}else{
					this.lista = true;
				}
	return this.lista;
	}

	
	onSecuencia(){
	 if ( this.guardartextoService.textodefinitivo == ''){     
	    // deriva a que otro componente emita un mensaje    
	 }else{
	this.array = this.compararService.siguiente;
	this.agregar = this.array.toString();
	this.secuenciaArray.push(this.agregar);
	}
	return this.secuenciaArray;
	}
	
	
	
	
	opcional() {                          // si el usuario pasa a la siguiente palabra sin escribir nada - al array se incorpora la palabra sin comparar                
										  //	 sin repetir la ultima palabra									
	this.ultimo = this.secuenciaArray.slice((this.secuenciaArray.length-1),this.secuenciaArray.length).toString();
	this.agregar = this.guardartextoService.palabraseleccionada;
	if ((this.guardartextoService.textodefinitivo == '') && (this.ultimo.includes(this.agregar)==false) ){
	this.agregar = this.guardartextoService.palabraseleccionada + ' (no data entered)';
	this.secuenciaArray.push(this.agregar);
	}else{	}
	}
	
	
	siguienteFn (i:number){                          // el numero i depende del boton seleccionado                  
	this.respuesta = this.clearService.clear(this.respuesta);                                                           
	this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo); 
			
				this.inicial = this.secuenciaI[i];
				this.final = this.secuenciaF[i];
	
	this.tomaPalabra(this.inicial,this.final);		   // deriva a la funcion que selecciona una palabra		
	this.show = false;
	}

// Termina emision de lista de cada resultado


// funcion para mostrar en secuencia los 10 botones uno por uno, cada boton remite a una funcion asociada a cada palabra

	i:number = 1;
	uno:boolean=true;
	dos:boolean=false;
	tres:boolean=false;
	cuatro:boolean=false;
	cinco:boolean=true;
	seis:boolean=false;
	siete:boolean=false;
	ocho:boolean=false;
	nueve:boolean=false;
	diez:boolean=false;
	contar:number = 0;
	acertadas: number = 0;
	porcentaje:boolean=false;
	grado:string='';
	
	onContinuar(){                                       // muestra solo un boton que selecciona una palabra especifica del array
	if (this.uno == true) {
	this.uno = false;  this.dos = true; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	 }else{
	if (this.dos == true){
	this.uno = false;  this.dos = false; this.tres = true; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	 }else{
	if (this.tres == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =true; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	}else{
	if (this.cuatro == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = true;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	}else{
	if (this.cinco == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = true;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	 }else{
	if (this.seis == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = true; this.ocho = false; this.nueve =false; this.diez = false;
	}else{
	if (this.siete == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = true; this.nueve =false; this.diez = false;
	}else{
	if (this.ocho == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =true; this.diez = false;
	 }else{
	if (this.nueve == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = true;
	}else{
	if (this.diez == true){
	this.uno = false;  this.dos = false; this.tres = false; this.cuatro =false; this.cinco = false;
	this.seis = false;  this.siete = false; this.ocho = false; this.nueve =false; this.diez = false;
	}                       
	}}}}}}}}}
	}
    
	

  // finaliza secuencia de siguientes palabras

	
	//al final cuenta aciertos y determina porcentaje
	determinarPorcentaje(){
	this.contar = this.compararService.aciertos(this.secuenciaArray);
	this.acertadas = this.compararService.porcentaje(this.secuenciaArray,this.contar);
			if( this.acertadas == 100){
			this.grado = 'A';
			}else{
			if (this.acertadas < 100 && this.acertadas > 40){
			this.grado = 'B';
			}else{
			if (this.acertadas < 40 || this.acertadas == 40){
			this.grado = 'C';
			}}}
	this.acertadas = this.acertadas/100;
	this.porcentaje = true;
	this.respuesta = this.clearService.clear(this.respuesta);                                                           
	this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo);
	}	
	
    borraSecuencia(){
	this.numeroingresado = 0;
	this.inicialingresado = 0;
	this.secuenciaI = [0];
	this.secuenciaF = [0];
	this.mensajeinicial1 = '';
	this.mensajeinicial2 = '';
	}
}	
	


