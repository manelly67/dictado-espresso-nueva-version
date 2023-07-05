import { Injectable } from '@angular/core';

import { AdItem } from './ad-item';
import { Publicidad1Component } from './publicidad1/publicidad1.component';
import { Publicidad2Component } from './publicidad2/publicidad2.component';
import { Publicidad3Component } from './publicidad3/publicidad3.component';
import { Publicidad4Component } from './publicidad4/publicidad4.component';


/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()

export class AdService {

  constructor() { }
  
  getAds(){
	return [
		new AdItem (Publicidad1Component,   {headline1: 'PUBLICIDAD',
												headline2: 'ADVERTISMENT',
                                        }),
										
		new AdItem (Publicidad2Component,   {headline: 'Estimado PROFESOR',
                                        body: 'Contáctanos, publicamos online tu TEST personalizado, y tus datos de contacto',
										body2: '¿QUIERES ATRAER MÁS ALUMNOS?',
										imagen1:'/assets/img/pub-b.jpg',
										enlace1:'https://patrocinar-spanishtest.netlify.app/',
										}),	
		
		new AdItem(Publicidad3Component,   {headline1: 'TEJE 500',
											headline2: '',
											imagen:'/assets/img/pub1c.jpg',
											imagen1:'/assets/img/pub1a.jpg',
											enlace1:'https://go.hotmart.com/F84148777T?ap=517b',
											imagen2:'/assets/img/pub1b.jpg',
											enlace2:'https://go.hotmart.com/F84148777T?ap=f50e',
                                        body: 'BUY NOW',
										enlace3:'https://go.hotmart.com/F84148777T',
										}),
										

		new AdItem(Publicidad4Component,   {headline1: '',
											headline2: '',
											imagen1:'/assets/img/pub2a.jpg',
											enlace1:'https://go.hotmart.com/Q84147394D?ap=0fa2',
											imagen2:'/assets/img/pub2b.jpg',
											enlace2:'https://go.hotmart.com/Q84147394D?ap=c7de',
											imagen3:'/assets/img/pub2c.jpg',
											enlace3:'https://go.hotmart.com/Q84147394D?ap=4cce',
                                        body: 'BUY NOW',
										enlace4:'https://go.hotmart.com/Q84147394D?ap=0fa2',
										}),
										
		new AdItem(Publicidad3Component,   {headline1: '',
											headline2: '',
											imagen:'/assets/img/pub3c.jpg',
											imagen1:'/assets/img/pub3a.jpg',
											enlace1:'https://www.udemy.com/course/aprender-a-disenar-viviendas/?kw=Aprender+a+di&src=sac',
											imagen2:'/assets/img/pub3b.jpg',
											enlace2:'https://www.udemy.com/course/aprender-a-disenar-viviendas/?kw=Aprender+a+di&src=sac',
                                        body: 'BUY NOW',
										enlace3:'https://www.udemy.com/course/aprender-a-disenar-viviendas/?kw=Aprender+a+di&src=sac',
										}),
		
		new AdItem(Publicidad4Component,   {headline1: '',
											headline2: '',
											imagen1:'/assets/img/pub4a.jpg',
											enlace1:'https://go.hotmart.com/I84148411H',
											imagen2:'/assets/img/pub4b.jpg',
											enlace2:'https://go.hotmart.com/I84148411H?dp=1',
											imagen3:'/assets/img/pub4c.jpg',
											enlace3:'https://go.hotmart.com/I84148411H',
                                        body: 'BUY NOW',
										enlace4:'https://go.hotmart.com/I84148411H?dp=1',
										}),
		
		new AdItem(Publicidad3Component,   {headline1: 'Now Anyone Can Learn Piano or Keyboard',
											headline2: '',
											imagen:'/assets/img/pub5c.jpg',
											imagen1:'/assets/img/pub5a.jpg',
											enlace1:'https://24de20xz7bs47qvfsywl6zybac.hop.clickbank.net',
											imagen2:'/assets/img/pub5b.jpg',
											enlace2:'https://24de20xz7bs47qvfsywl6zybac.hop.clickbank.net',
                                        body: 'BUY NOW',
										enlace3:'https://24de20xz7bs47qvfsywl6zybac.hop.clickbank.net',
										}),
		
		
		new AdItem (Publicidad2Component,   {headline: 'Senhor PROFESSOR',
										body: 'Contacte-nos, nós publicamos o seu TESTE personalizado em linha e os seus dados de contacto',
										body2: 'QUER ATRAIR MAIS ESTUDANTES?',
										imagen1:'/assets/img/pub-b.jpg',
										enlace1:'https://patrocinar-portuguesetest.netlify.app/',
										}),	
		
		new AdItem(Publicidad4Component,   {headline1: '',
											headline2: 'AI IMAGE GENERATOR TOOLS',
											imagen1:'/assets/img/pub6a.jpg',
											enlace1:'https://8b930aqa790d2cu4ngo24u2s65.hop.clickbank.net',
											imagen2:'/assets/img/pub6b.jpg',
											enlace2:'https://8b930aqa790d2cu4ngo24u2s65.hop.clickbank.net',
											imagen3:'/assets/img/pub6c.jpg',
											enlace3:'https://8b930aqa790d2cu4ngo24u2s65.hop.clickbank.net',
                                        body: 'BUY NOW',
										enlace4:'https://8b930aqa790d2cu4ngo24u2s65.hop.clickbank.net',
										}),
		
		new AdItem(Publicidad3Component,   {headline1: 'More than 1000 happy students',
											headline2: '',
											imagen:'/assets/img/pub7c.jpg',
											imagen1:'/assets/img/pub7a.jpg',
											enlace1:'https://ed7632u8xg35yeqgwo1mbgtiqk.hop.clickbank.net',
											imagen2:'/assets/img/pub7b.jpg',
											enlace2:'https://ed7632u8xg35yeqgwo1mbgtiqk.hop.clickbank.net',
                                        body: 'BUY NOW',
										enlace3:'https://ed7632u8xg35yeqgwo1mbgtiqk.hop.clickbank.net',
										}),
										
		new AdItem(Publicidad4Component,   {headline1: '',
											headline2: '',
											imagen1:'/assets/img/pub10a.jpg',
											enlace1:'https://go.hotmart.com/F84458924K',
											imagen2:'/assets/img/pub10b.jpg',
											enlace2:'https://go.hotmart.com/F84458924K?dp=1',
											imagen3:'/assets/img/pub10c.jpg',
											enlace3:'https://go.hotmart.com/F84458924K',
                                        body: 'BUY NOW',
										enlace4:'https://go.hotmart.com/F84458924K?dp=1',
										}),
		
		
		
	];
  }
  
}
