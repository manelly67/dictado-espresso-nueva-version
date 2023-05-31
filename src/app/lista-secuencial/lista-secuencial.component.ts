import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';


@Component({
  selector: 'app-lista-secuencial',
  templateUrl: './lista-secuencial.component.html',
  styleUrls: ['./lista-secuencial.component.css'],
  animations: [
    trigger('slideStatus', [ 
      transition(':enter', [
        animate('2s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' })
		  
        ])),
      ]),   
    ]),
	trigger('flyIn', [ 
      transition(':enter', [
        animate('2s', keyframes([
		
		  style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(+20%)' }),
          
        ])),
      ]),
    ])
  ]
})
export class ListaSecuencialComponent implements OnInit{


@Input() lista?:boolean;
@Input() porcentaje?:boolean;
@Input() gradoA?:boolean;      
@Input() secuenciaArray:string[]=[];
@Input() contar:number = 0;
@Input() acertadas: number = 0;
@Input() grado:string='';

nsecuencia:string = '';


ngOnInit(){
this.porcentaje=false;
this.gradoA=false;          
}


}
