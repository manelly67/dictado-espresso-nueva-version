import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DefinirAudioService } from '../definir-audio.service';
import { MostrarService } from '../mostrar.service';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-dictado-principiante',
  templateUrl: './dictado-principiante.component.html',
  styleUrls: ['./dictado-principiante.component.css']
})
export class DictadoPrincipianteComponent implements OnInit{
constructor(private route: ActivatedRoute,
				private location: Location,
					public definirAudioService: DefinirAudioService,
						private mostrarService:MostrarService,
							public mensajeService: MensajeService   // solamente define el título de la página de ejercicios correspondiente
																){}

ngOnInit(){
 this.mostrarService.show = false;
}


goBack(): void {
		this.location.back();
		}

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=0;
	finalnivel:number=1;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios

nivel:string='principiante';

nro:number=0;

    // informa el numero del boton seleccionado para buscar el archivo de audio correspondiente y el texto respectivo
definirArchivo(i:number){
  this.definirAudioService.nivel=this.nivel;
  this.nro = i;
  this.definirAudioService.nro = this.nro;
    // informa la categoría al componente dictado
  this.definirAudioService.inicialnivel = this.inicialnivel;
  this.definirAudioService.finalnivel = this.finalnivel;
}

}


