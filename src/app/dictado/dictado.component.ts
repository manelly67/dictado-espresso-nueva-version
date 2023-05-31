import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

import { Letrasdeaudio} from '../letrasdeaudio';
import { Letrasdeaudiopt} from '../letrasdeaudiopt';

import { MostrarService } from '../mostrar.service';
import { MensajeService } from '../mensaje.service';
import { DefinirAudioService } from '../definir-audio.service';
import { ClearService } from '../clear.service';
import { GuardartextoService } from '../guardartexto.service';
import { TecladoService } from '../teclado.service';
import { CompararService } from '../comparar.service';


@Component({
  selector: 'app-dictado',
  templateUrl: './dictado.component.html',
  styleUrls: ['./dictado.component.css'],
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
    ])
	]
})
export class DictadoComponent implements OnInit{
                                           // al final revisar cambiar public por private y verificar funcionamiento
constructor(private route: ActivatedRoute,
				private location: Location,
					private mostrarService:MostrarService,			// muestra y oculta el carrusel
						public mensajeService: MensajeService,   // solamente define el título de la página de ejercicios correspondiente
							public definirAudioService: DefinirAudioService,
								public clearService: ClearService,
									public guardartextoService: GuardartextoService,
										public tecladoService: TecladoService,
											public compararService: CompararService		){}


goBack(): void {
		this.location.back();
		}


	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number = 0;
	finalnivel:number = 0;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios
	

show = false;    /* se inicializa en false para que la respuesta este oculta   */
letraSeleccionada: Letrasdeaudio[]= [];
letraSeleccionadapt: Letrasdeaudiopt[]= [];
letra:string = '';
palabraseleccionada:string = '';
respuesta = '';
grado:string = '';
spanish:boolean=false;
portuguese:boolean=false;

texto1:string='';
texto2:string='';
texto3:string='';
texto4:string='';
texto5:string='';

// para definir el idioma de las instrucciones 
	ptFn(){
	if (this.inicialnivel > 12){
	this.texto1='Gerar';
	this.texto2='Ocultar resposta';
	this.texto3='Mostrar resposta';
	this.texto4='Não foi gerado áudio';
	this.texto5='Não escreveu dados para comparação';
	}
	}
	
	esFn(){
	if (this.inicialnivel < 13){
	this.texto1='Generar';
	this.texto2='Ocultar respuesta';
	this.texto3='Mostrar respuesta';
	this.texto4='No has generado un audio';
	this.texto5='No has escrito datos para comparar';
	}
	}

ngOnInit(){                        // al iniciar el componente toma del service definirAudio las letras del audio y aparta el texto a comparar
 this.porcentaje=false;
 this.mostrarService.show = false;
		// para mostrar respuesta español o portugués
 this.spanish = this.definirAudioService.activarSpanish();
 this.portuguese = this.definirAudioService.activarPortuguese();
		// capta las letras de los audios y selecciona la de español o portugués de acuerdo a la categoría
 this.letraSeleccionada = this.definirAudioService.captarLetradelaudio();
 this.letraSeleccionadapt = this.definirAudioService.captarLetradelaudiopt();
 this.palabraseleccionada = this.definirAudioService.extraerTexto(this.spanish,this.portuguese,this.letraSeleccionada,this.letraSeleccionadapt);
 this.palabraseleccionada = this.guardarSeleccion();
       //borra los textos anteriores - ingresados por el usuario- para comenzar un nuevo ingreso de texto
 this.respuesta = this.clearService.clear(this.respuesta);                                                           
 this.guardartextoService.textodefinitivo = this.clearService.clear(this.guardartextoService.textodefinitivo);   
 this.onClearPercent(); 
 this.clear();
		// capta del service los niveles para definir la categoria
 this.inicialnivel = this.definirAudioService.inicialnivel;
 this.finalnivel = this.definirAudioService.finalnivel;
 this.tecladoService.nivelcategoria = this.inicialnivel;     //para definir el teclado a utilizar
 this.ptFn();
 this.esFn();
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
		this.mensajedealerta = this.texto4;
		return this.mensajedealerta;
		}else{	
			if ( this.guardartextoService.textodefinitivo == ''){
			this.mensajedealerta = this.texto5;
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
		this.definirAudioService.gradoA = this.definirAudioService.activarGrado(this.grado);
		this.definirAudioService.avanzado = this.definirAudioService.activarAvanzado(this.definirAudioService.nivel);
		this.definirAudioService.principiante = this.definirAudioService.activarPrincipiante(this.definirAudioService.nivel);
		this.definirAudioService.intermedio = this.definirAudioService.activarIntermedio(this.definirAudioService.nivel);
		
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
		return this.definirAudioService.gradoA;
		return this.definirAudioService.avanzado;
		return this.definirAudioService.principiante;
		return this.definirAudioService.intermedio;
		
		
			} while(this.mensajedealerta == '')
		}

clear(){   // ubicar desde donde llamar esta funcion de ser necesaria
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

onClearPercent(){
this.aciertos = this.clearService.clearNro(this.aciertos);
this.percentAciertos = this.clearService.clearNro(this.percentAciertos);
this.mostrarIndicador = this.clearService.clear(this.mostrarIndicador);
this.compararService.siguiente = this.clearService.clearArray(this.compararService.siguiente);
this.compararService.contar = this.clearService.clearNro(this.compararService.contar);
this.compararService.percentAciertos = this.clearService.clearNro(this.compararService.percentAciertos);
this.compararService.mostrarIndicador = this.clearService.clear(this.compararService.mostrarIndicador);
this.clearAnimacion();
}

clearAnimacion(){
this.definirAudioService.gradoA=false;
this.definirAudioService.avanzado=false;
this.definirAudioService.principiante=false;
this.definirAudioService.intermedio=false;

}

}
