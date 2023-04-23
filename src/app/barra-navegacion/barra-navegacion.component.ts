import { Component, OnInit } from '@angular/core';


import { MensajeService } from '../mensaje.service';                // lee el array con las categorias
import { MostrarService } from '../mostrar.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

constructor(public mostrarService: MostrarService,
				public mensajeService: MensajeService) {}

	ngOnInit(){                                      // variable para Mostrar y Ocultar el carrusel en la página principal
	this.mostrarService.show = true;  

	}


categoria = this.mensajeService.categoria;
categorias = this.mensajeService.captarCategorias();



}
