import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

import { NumerosService } from '../numeros.service';
import { ClearService } from '../clear.service';
import { GuardartextoService } from '../guardartexto.service';
import { TecladoService } from '../teclado.service';
import { CompararService } from '../comparar.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
  animations: [
    trigger('slideStatus', [ 
      transition(':enter', [
        animate('4s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' })
		  
        ])),
      ]),   
    ]),
	trigger('randomNumber', [ 
      transition('false => true', [
        animate('1s', keyframes([
		
		  style({ backgroundColor: 'blue'}),
          style({ backgroundColor: 'red'}),
          style({ backgroundColor: 'orange'}),
		  style({ backgroundColor: 'blue'}),
          style({ backgroundColor: 'red'}),
          style({ backgroundColor: 'orange'})
		  
        ])),
      ]),   
    ]),
	trigger('randomNumber1', [
    state('true', 
		  style({ fontSize: '34px' }),   
        ),
    state('false', style({ fontSize: '20px' })),
    transition('false => true', animate('1s')) 
	])
	]
})
export class NumerosComponent implements OnInit {

constructor( private numerosService: NumerosService,
				public clearService: ClearService,
					public guardartextoService: GuardartextoService,
						public tecladoService: TecladoService,
							public compararService: CompararService	
														){}

@Input() minimo:number = 0;
@Input() maximo:number = 0;
@Input() nivel:string = '';
@Input() inicialnivel:number=0;

show = false;    /* se inicializa en false para que la respuesta este oculta   */
numeroGenerado:number=0;
isNumber:boolean=false;   // activa y desactiva animacion - se activa con click generar - se desactiva con enter el texto
palabraseleccionada:string = '';
respuesta = '';
grado:string = '';
numeroFormateado:string='?';
separadorMilesPunto:string='.';

	ngOnInit(){
	this.porcentaje=false;
	this.isNumber=false;    
	this.palabraseleccionada = '';
	      //borra los textos anteriores - ingresados por el usuario- para comenzar un nuevo ingreso de texto
	this.respuesta = this.clearService.clear(this.respuesta);                                                           
	this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo);   
	this.onClearPercent(); 
	this.clear();
	this.tecladoService.nivelcategoria = this.inicialnivel;     //para definir el teclado a utilizar
	}

	generarNumero(){		// genera un numero cuando el usuario hace click 
	this.numeroGenerado = this.numerosService.generarNumero();
	this.show = false;
	this.isNumber=true;		
	}
	
	formatearNumero(){
	this.numeroFormateado = this.numerosService.formatearNumero(this.numeroGenerado,this.separadorMilesPunto);
	}
	
	asignarEscritura(){		// asigna al numero generado la escritura correspondiente
	this.palabraseleccionada = this.numerosService.captarEscrituraNumero(this.nivel,this.numeroGenerado);	
	}


	guardarSeleccion():string{
	this.palabraseleccionada = this.guardartextoService.depurar(this.palabraseleccionada);           // extrae de la palabra seleccionada los signos ?¿ y ,
	this.palabraseleccionada = this.guardartextoService.guardarSeleccion(this.palabraseleccionada);  // guarda la palabraseleccionada(convertida en mayuscula) para COMPARAR
	return this.palabraseleccionada;
	}
	
	onGuardartexto():string {
	this.respuesta = this.guardartextoService.depurar(this.tecladoService.textodefinitivo);    //  extrae del texto ingresado los caracteres especiales
	this.tecladoService.array = this.clearService.clearArray(this.tecladoService.array);
	this.tecladoService.arraytexto = this.clearService.clear(this.tecladoService.arraytexto);
	this.respuesta = this.guardartextoService.guardarDefinitivo(this.respuesta);   // guarda el texto ingresado(convertido en mayuscula) para COMPARAR
	return this.respuesta;
	}

   // verificar
   
arrayPalabra: string[] = [];
arrayRespuesta: string[] = [];
respuestacomparar: string = ''; 
nuevoArray: string[] = [];
aciertos: number = 0;
percentAciertos: number = 0;
porcentajeMostrar: number = 0;
porcentaje:boolean = false;
mostrarIndicador:string = '';
mensajedealerta: string = '';

	mensaje():string{
	this.mensajedealerta = this.clearService.clear(this.mensajedealerta);    	
		
		if ( this.guardartextoService.palabraseleccionada == ''){
		this.mensajedealerta = 'No has generado una palabra para comparar';
		return this.mensajedealerta;
		}else{	
			if ( this.guardartextoService.textodefinitivo == ''){
			this.mensajedealerta = 'No has escrito datos para comparar';
			return this.mensajedealerta;
				}else{
				this.mensajedealerta = '';
				return this.mensajedealerta;
				}
			}
	}
		
		comparar(): string[] | undefined | number | string | boolean{
		this.mensajedealerta = this.mensaje();
		do {
		this.palabraseleccionada = this.guardartextoService.palabraseleccionada;
		this.respuestacomparar = this.guardartextoService.textodefinitivo;
		this.arrayPalabra = this.compararService.crearArray(this.palabraseleccionada);
		this.arrayRespuesta = this.compararService.crearArray(this.respuestacomparar);
		this.nuevoArray = this.compararService.comparandoArrays(this.arrayPalabra,this.arrayRespuesta);
		this.aciertos = this.compararService.aciertos(this.nuevoArray);
		this.percentAciertos = this.compararService.porcentaje(this.nuevoArray,this.aciertos);
		this.porcentaje = this.compararService.porcentajeBoolean(this.percentAciertos);
		this.grado = this.compararService.graduacion(this.percentAciertos);
		this.porcentajeMostrar = this.compararService.porcentajeMostrar(this.percentAciertos);
		this.mostrarIndicador = this.compararService.indicador(this.nuevoArray,this.percentAciertos);
		this.compararService.siguiente = this.nuevoArray;
		this.isNumber = false;
		
		return this.arrayPalabra;
		return this.arrayRespuesta;
		return this.nuevoArray;
		return this.aciertos;
		return this.percentAciertos;
		return this.porcentaje;
		return this.porcentajeMostrar;
		return this.mostrarIndicador;
		return this.compararService.siguiente;
		return this.grado;
		return this.isNumber;
		
			} while(this.mensajedealerta == '')
		}

clear(){   // ubicar desde donde llamar esta funcion de ser necesaria

this.respuestacomparar = this.clearService.clear(this.respuestacomparar);
this.mensajedealerta = this.clearService.clear(this.mensajedealerta);           /* al hacer click en generar palabra borra cualquier mensaje de alerta previo y datos anteriores */              
this.arrayPalabra = this.clearService.clearArray(this.arrayPalabra);
this.arrayRespuesta = this.clearService.clearArray(this.arrayRespuesta);
this.nuevoArray = this.clearService.clearArray(this.nuevoArray);
this.aciertos = this.clearService.clearNro(this.aciertos);
this.percentAciertos = this.clearService.clearNro(this.percentAciertos);
this.mostrarIndicador = this.clearService.clear(this.mostrarIndicador);
this.porcentaje=false;
this.grado = this.clearService.clear(this.grado);
this.onClearPercent();
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

