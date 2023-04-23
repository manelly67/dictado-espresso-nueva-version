import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
    ContactoComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
