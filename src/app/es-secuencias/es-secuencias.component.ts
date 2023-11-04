import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-es-secuencias',
  templateUrl: './es-secuencias.component.html',
  styleUrls: ['./es-secuencias.component.css']
})
export class EsSecuenciasComponent implements OnInit {

constructor(private route: ActivatedRoute,
				private location: Location,
					public mensajeService: MensajeService   // solamente define el título de la página de ejercicios correspondiente
				) { }
				
idioma:string ='';

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number= 6;
	finalnivel:number= 7;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios
			
	ngOnInit(){
	this.idioma='spanish';
	}


}
