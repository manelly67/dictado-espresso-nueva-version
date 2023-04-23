import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-es-secuencias',
  templateUrl: './es-secuencias.component.html',
  styleUrls: ['./es-secuencias.component.css']
})
export class EsSecuenciasComponent implements OnInit {

constructor(private route: ActivatedRoute,
				private location: Location ) { }
				
idioma:string ='';
			
	ngOnInit(){
	this.idioma='spanish';
	}


}
