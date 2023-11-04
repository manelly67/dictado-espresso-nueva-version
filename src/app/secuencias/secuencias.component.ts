import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MensajeService } from '../mensaje.service';


@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

constructor(private route: ActivatedRoute,
				private location: Location,
					public mensajeService: MensajeService   // solamente define el título de la página de ejercicios correspondiente
					) { }

idioma:string ='';

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=16;
	finalnivel:number=17;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios
			
	ngOnInit(){
	this.idioma='portuguese';
	}

}
