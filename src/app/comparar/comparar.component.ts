import { Component, Input} from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

import { CompararService } from '../comparar.service';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.css'],
  animations: [
    
	trigger('wordIn', [ 
      transition(':enter', [
        animate('2s', keyframes([
		  style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(+100%)' }),
          style({ transform: 'translateY(-60%)' }),
        ])),
      ]),
    ])
  ]
})

export class CompararComponent {

constructor( public compararService: CompararService ) { }	
														

@Input() palabraseleccionada: string = '?';
@Input() respuestacomparar: string = '?';
@Input() arrayPalabra: string[] = [];
@Input() arrayRespuesta: string[] = [];
@Input() nuevoArray: string[] = [];
@Input() aciertos: number = 0;
@Input() percentAciertos: number = 0;
@Input() mostrarIndicador: string = '?';


palabra: string = '';
npalabra: string = '';
respuesta: string = '';
indicador: string = '';



}
