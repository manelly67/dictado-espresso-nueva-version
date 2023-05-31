import { Injectable } from '@angular/core';

import { AdItem } from './ad-item';
import { Publicidad1Component } from './publicidad1/publicidad1.component';
import { Publicidad2Component } from './publicidad2/publicidad2.component';

/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()

export class AdService {

  constructor() { }
  
  getAds(){
	return [
		new AdItem (Publicidad1Component,   {headline: 'PUBLICIDAD',
                                        body: 'Anuncia tu producto aquí'}),
										
		new AdItem (Publicidad2Component,   {headline: 'Estimado PROFESOR',
                                        body: 'Contáctanos, incorporamos tu TEST personalizado, y tus datos de contacto',
										body2: 'GANA MÁS ALUMNOS'}),								
										
		new AdItem(Publicidad1Component,   {headline: 'ADVERTISMENT',
                                        body: 'Announce your product here'}),
		
		new AdItem(Publicidad1Component,   {headline: 'PUBLICIDADE',
                                        body: 'Anuncie o seu produto aqui'}),

		new AdItem (Publicidad2Component,   {headline: 'Senhor PROFESSOR',
                                        body: 'Contacte-nos, incorporamos o seu TESTE personalizado e os seus dados de contacto',
										body2: 'ATRAI MAIS ESTUDANTES '}),									
		
	];
  }
  
}
