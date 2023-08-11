import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatRadioModule } from '@angular/material/radio'; 

/* import { HashLocationStrategy, LocationStrategy } from '@angular/common';  */     

// para que al recargar la pagina no de mensaje de error

import { AppComponent } from './app.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { RandomComponent } from './random/random.component';
import { EscribeComponent } from './escribe/escribe.component';
import { TecladoComponent } from './teclado/teclado.component';
import { CompararComponent } from './comparar/comparar.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SecuenciasComponent } from './secuencias/secuencias.component';
import { IngresarNumeroComponent } from './ingresar-numero/ingresar-numero.component';
import { SecuencialComponent } from './secuencial/secuencial.component';
import { ListaSecuencialComponent } from './lista-secuencial/lista-secuencial.component';
import { EsPalabrasComponent } from './es-palabras/es-palabras.component';
import { EsSecuenciasComponent } from './es-secuencias/es-secuencias.component';
import { EsRandomComponent } from './es-random/es-random.component';
import { EsSecuencialComponent } from './es-secuencial/es-secuencial.component';
import { DictadoAvanzadoComponent } from './dictado-avanzado/dictado-avanzado.component';
import { DictadoComponent } from './dictado/dictado.component';
import { AudioComponent } from './audio/audio.component';
import { DictadoIntermedioComponent } from './dictado-intermedio/dictado-intermedio.component';
import { DictadoPrincipianteComponent } from './dictado-principiante/dictado-principiante.component';
import { ApoyameComponent } from './apoyame/apoyame.component';
import { NumerosAvanzadoComponent } from './numeros-avanzado/numeros-avanzado.component';
import { NumerosIntermedioComponent } from './numeros-intermedio/numeros-intermedio.component';
import { NumerosPrincipianteComponent } from './numeros-principiante/numeros-principiante.component';
import { NumerosComponent } from './numeros/numeros.component';
import { NumerosPTPrincipianteComponent } from './numeros-pt-principiante/numeros-pt-principiante.component';
import { NumerosPTIntermedioComponent } from './numeros-pt-intermedio/numeros-pt-intermedio.component';
import { NumerosIntermedio2Component } from './numeros-intermedio2/numeros-intermedio2.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { PoliticadeprivacidadComponent } from './politicadeprivacidad/politicadeprivacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SpanishTestComponent } from './spanish-test/spanish-test.component';
import { BaseDeTestComponent } from './base-de-test/base-de-test.component';
import { Animacion1Component } from './animacion1/animacion1.component';
import { Animacion2Component } from './animacion2/animacion2.component';
import { SpanishTestIntComponent } from './spanish-test-int/spanish-test-int.component';
import { SpanishTestAvanzComponent } from './spanish-test-avanz/spanish-test-avanz.component';
import { DictadoptAvanzadoComponent } from './dictadopt-avanzado/dictadopt-avanzado.component';
import { DictadoptIntermedioComponent } from './dictadopt-intermedio/dictadopt-intermedio.component';
import { DictadoptPrincipianteComponent } from './dictadopt-principiante/dictadopt-principiante.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { Publicidad1Component } from './publicidad1/publicidad1.component';
import { PortugueseTestComponent } from './portuguese-test/portuguese-test.component';
import { Publicidad2Component } from './publicidad2/publicidad2.component';
import { Animacion3Component } from './animacion3/animacion3.component';
import { InProgressPtComponent } from './in-progress-pt/in-progress-pt.component';
import { Publicidad3Component } from './publicidad3/publicidad3.component';
import { Publicidad4Component } from './publicidad4/publicidad4.component';
import { PortugueseTestIntComponent } from './portuguese-test-int/portuguese-test-int.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { NumerosPtIntermedio2Component } from './numeros-pt-intermedio2/numeros-pt-intermedio2.component';

@NgModule({
  declarations: [
    AppComponent,
    PalabrasComponent,
    RandomComponent,
    EscribeComponent,
    TecladoComponent,
    CompararComponent,
    BarraNavegacionComponent,
    CarruselComponent,
    SecuenciasComponent,
    IngresarNumeroComponent,
    SecuencialComponent,
    ListaSecuencialComponent,
    EsPalabrasComponent,
    EsSecuenciasComponent,
    EsRandomComponent,
    EsSecuencialComponent,
    DictadoAvanzadoComponent,
    DictadoComponent,
    AudioComponent,
    DictadoIntermedioComponent,
    DictadoPrincipianteComponent,
    ApoyameComponent,
    NumerosAvanzadoComponent,
    NumerosIntermedioComponent,
    NumerosPrincipianteComponent,
    NumerosComponent,
    NumerosPTPrincipianteComponent,
    NumerosPTIntermedioComponent,
    NumerosIntermedio2Component,
    InProgressComponent,
    PoliticadeprivacidadComponent,
    ContactoComponent,
    SpanishTestComponent,
    BaseDeTestComponent,
    Animacion1Component,
    Animacion2Component,
    SpanishTestIntComponent,
    SpanishTestAvanzComponent,
    DictadoptAvanzadoComponent,
    DictadoptIntermedioComponent,
    DictadoptPrincipianteComponent,
    AdBannerComponent,
    AdDirective,
    Publicidad1Component,
    PortugueseTestComponent,
    Publicidad2Component,
    Animacion3Component,
    InProgressPtComponent,
    Publicidad3Component,
    Publicidad4Component,
    PortugueseTestIntComponent,
    YoutubeVideoComponent,
    NumerosPtIntermedio2Component
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
    AppRoutingModule,
	MatRadioModule,
  ],
  providers: [  AdService,
				/* { provide: LocationStrategy, useClass: HashLocationStrategy } */
				],     // para que al recargar la pagina no de mensaje de error
  entryComponents: [ Publicidad1Component ],
  bootstrap: [AppComponent]
})
export class AppModule { }
