import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

constructor(private route: ActivatedRoute,
				private location: Location ) { }

idioma:string ='';
			
	ngOnInit(){
	this.idioma='portuguese';
	}

}
