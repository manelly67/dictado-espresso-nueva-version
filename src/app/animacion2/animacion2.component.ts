import { Component } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animacion2',
  templateUrl: './animacion2.component.html',
  styleUrls: ['./animacion2.component.css'],
   animations: [
   trigger('showInOut1', [ 
        transition(':enter', [  
		animate('6s 0.1s ease', keyframes([
		  
		  style({ bottom: '40px' }),
          style({ bottom: '70px' }),
          style({ bottom: '100px' }),
		  style({ bottom: '80px' }),
          style({ bottom: '40px' }),
          style({ bottom: '-200px' })
		  
        ])),
      ]),   
    ]),
	trigger('showInOut2', [ 
        transition(':enter', [  
		animate('6s 0.1s ease', keyframes([
		  
		  style({ left: '40px' }),
          style({ left: '100px' }),
          style({ left: '50px' }),
		  style({ left: '-150px' })
		  
        ])),
      ]),   
    ])
   ]
})
export class Animacion2Component  {

}
