import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; 
                  

import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { SecuenciasComponent } from './secuencias/secuencias.component';
import { EsPalabrasComponent } from './es-palabras/es-palabras.component';
import { EsSecuenciasComponent } from './es-secuencias/es-secuencias.component';
import { DictadoAvanzadoComponent } from './dictado-avanzado/dictado-avanzado.component';
import { DictadoPrincipianteComponent } from './dictado-principiante/dictado-principiante.component';
import { DictadoIntermedioComponent } from './dictado-intermedio/dictado-intermedio.component';
import { DictadoComponent } from './dictado/dictado.component';
import { NumerosAvanzadoComponent } from './numeros-avanzado/numeros-avanzado.component';
import { NumerosPrincipianteComponent } from './numeros-principiante/numeros-principiante.component';
import { NumerosIntermedioComponent } from './numeros-intermedio/numeros-intermedio.component';
import { NumerosIntermedio2Component } from './numeros-intermedio2/numeros-intermedio2.component';
import { NumerosPTPrincipianteComponent } from './numeros-pt-principiante/numeros-pt-principiante.component';
import { NumerosPTIntermedioComponent } from './numeros-pt-intermedio/numeros-pt-intermedio.component';
import { SpanishTestComponent } from './spanish-test/spanish-test.component';
import { SpanishTestIntComponent } from './spanish-test-int/spanish-test-int.component';
import { SpanishTestAvanzComponent } from './spanish-test-avanz/spanish-test-avanz.component';
import { DictadoptAvanzadoComponent } from './dictadopt-avanzado/dictadopt-avanzado.component';
import { DictadoptPrincipianteComponent } from './dictadopt-principiante/dictadopt-principiante.component';
import { DictadoptIntermedioComponent } from './dictadopt-intermedio/dictadopt-intermedio.component';
import { PortugueseTestComponent } from './portuguese-test/portuguese-test.component';



import { InProgressComponent } from './in-progress/in-progress.component';
import { PoliticadeprivacidadComponent } from './politicadeprivacidad/politicadeprivacidad.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: '', redirectTo: '/barra', pathMatch: 'full' },
  { path: 'barra', component: BarraNavegacionComponent },
  { path: 'ptpalabras', component: PalabrasComponent },
  { path: 'ptsecuencias', component: SecuenciasComponent },
  { path: 'espalabras', component: EsPalabrasComponent },
  { path: 'essecuencias', component: EsSecuenciasComponent },
  { path: 'dictadoAvanzado', component: DictadoAvanzadoComponent },
  { path: 'dictadoPrincipiante', component: DictadoPrincipianteComponent },
  { path: 'dictadoIntermedio', component: DictadoIntermedioComponent },
  { path: 'dictado', component: DictadoComponent },
  { path: 'numerosAvanzado', component: NumerosAvanzadoComponent },
  { path: 'numerosPrincipiante', component: NumerosPrincipianteComponent },
  { path: 'numerosIntermedio', component: NumerosIntermedioComponent },
  { path: 'numerosIntermedio2', component: NumerosIntermedio2Component },
  { path: 'numerosPrincipiantePT', component: NumerosPTPrincipianteComponent },
  { path: 'numerosintermedioPT', component: NumerosPTIntermedioComponent },
  { path: 'spanishTest1', component: SpanishTestComponent },
  { path: 'spanishTest2', component: SpanishTestIntComponent },
  { path: 'spanishTest3', component: SpanishTestAvanzComponent },
  { path: 'dictadoptAvanzado', component: DictadoptAvanzadoComponent },
  { path: 'dictadoptPrincipiante', component: DictadoptPrincipianteComponent },
  { path: 'dictadoptIntermedio', component: DictadoptIntermedioComponent },
  { path: 'portugueseTest1', component: PortugueseTestComponent },
  
  
  { path: 'inProgress', component: InProgressComponent },
  { path: 'privacidad', component: PoliticadeprivacidadComponent },
  { path: 'contacto', component: ContactoComponent }
];


@NgModule({ 
  imports: [RouterModule.forRoot(routes)],                                
  exports: [RouterModule]
})

export class AppRoutingModule { }


  /* CommonModule 
  
  declarations: [],
  
  */
  
 