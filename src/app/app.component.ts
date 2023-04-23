import { Component, OnInit} from '@angular/core';
import { MostrarService } from './mostrar.service';

// inicio instalacion google analytics
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../environment/environment';
declare let gtag: (property: string, value: any, configs: any) => {};
// fin instalacion google analytics


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


constructor(public mostrarService: MostrarService,
				public router: Router) {
				this.router.events.subscribe(event => {
				if (event instanceof NavigationEnd) {
					gtag('config', environment.googleAnalyticsId, {
						page_path: event.urlAfterRedirects
						});
					}
				});
				}

// hasta aqui la instalacion de google analytics para las paginas verificar luego

  title = 'Ejercicios para practicar los idiomas Español y Portugués';

  ngOnInit(){
	this.mostrarService.show = true;         
	}
	
	showbarra:boolean=false;     // se establece en false para evitar duplicidad, las barras las muestra directamente el app-routing module
 

  
}
