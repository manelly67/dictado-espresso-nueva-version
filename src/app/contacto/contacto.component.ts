import { Component, OnInit } from '@angular/core';

import { MostrarService } from '../mostrar.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

constructor( private mostrarService:MostrarService){}

ngOnInit(){
	this.mostrarService.show = false;
}

}
