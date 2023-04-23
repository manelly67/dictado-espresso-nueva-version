import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MostrarService } from '../mostrar.service';
import { MensajeService } from '../mensaje.service';
import { NumerosService } from '../numeros.service';

@Component({
  selector: 'app-numeros-avanzado',
  templateUrl: './numeros-avanzado.component.html',
  styleUrls: ['./numeros-avanzado.component.css']
})
export class NumerosAvanzadoComponent implements OnInit {

constructor(private route: ActivatedRoute,
				private location: Location,
						private mostrarService:MostrarService,
							public mensajeService: MensajeService,   // solamente define el título de la página de ejercicios correspondiente
								private numerosService: NumerosService	){}

ngOnInit(){
 this.mostrarService.show = false;
 this.minimo = this.numerosService.min(this.nivel);
 this.maximo = this.numerosService.max(this.nivel);
}


goBack(): void {
		this.location.back();
		}

	// inicio definir título superior de la categoría de la página de ejercicios
	categoria = this.mensajeService.categoria;
	categorias = this.mensajeService.captarCategorias();
	inicialnivel:number=11;
	finalnivel:number=12;
	espacio:string=' - ';
	// final definir título superior de la categoría de la página de ejercicios

nivel:string='avanzado';
minimo:number=0;
maximo:number=0;


}
