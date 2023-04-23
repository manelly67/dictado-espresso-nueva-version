import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MostrarService } from '../mostrar.service';
import { MensajeService } from '../mensaje.service';                // lee el array con las categorias

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit{

constructor(private route: ActivatedRoute,
				private location: Location,
						private mostrarService:MostrarService,
							public mensajeService: MensajeService		){}
						
ngOnInit(){
this.mostrarService.show = false;
}

goBack():void{
 this.location.back();
}

textoES:string='en proceso de elaboración';
textoEN:string='Module In Progress';
textoPT:string='em fase de preparação';
separador:string=' / ';

categoria = this.mensajeService.categoria;
categorias = this.mensajeService.captarCategorias();


}
