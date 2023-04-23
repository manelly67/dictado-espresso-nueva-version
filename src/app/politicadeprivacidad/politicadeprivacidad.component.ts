import { Component, OnInit } from '@angular/core';

import { MostrarService } from '../mostrar.service';

@Component({
  selector: 'app-politicadeprivacidad',
  templateUrl: './politicadeprivacidad.component.html',
  styleUrls: ['./politicadeprivacidad.component.css']
})
export class PoliticadeprivacidadComponent implements OnInit {

	constructor(private mostrarService:MostrarService){}

ngOnInit(){
	this.mostrarService.show = false;
}

}
