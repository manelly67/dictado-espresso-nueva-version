import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animacion1',
  templateUrl: './animacion1.component.html',
  styleUrls: ['./animacion1.component.css'],
  
  animations: [
    
	trigger('iniciar1a', [ 
        transition(':enter', [  
		animate('10s ease', keyframes([
		  
		  style({ top: '50px' }),
          style({ top: '100px' }),
          style({ top: '200px' }),
		  style({ top: '300px' }),
          style({ top: '400px' }),
          style({ top: '500px' }),
          style({ top: '600px' }),
          style({ top: '700px' }),
		  style({ top: '800px' })
      
		  
        ])),
      ]),   
    ]),
	trigger('iniciar1b', [ 
        transition(':enter', [  
		animate('10s ease', keyframes([
		  
		style({ top: '60px' }),
          style({ top: '100px' }),
          style({ top: '210px' }),
		  style({ top: '310px' }),
          style({ top: '410px' }),
          style({ top: '510px' }),
          style({ top: '610px' }),
          style({ top: '710px' }),
		  style({ top: '810px' })		

		
        ])),
      ]),   
    ]),
	
	trigger('iniciar2a', [ 
        transition(':enter', [  
		animate('10s', keyframes([
		
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
          style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'})
        ])),
      ]),   
    ]),
	trigger('iniciar3a', [ 
		transition(':enter', [
        animate('10s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	trigger('iniciar3b', [ 
		transition(':enter', [
        animate('10s', keyframes([
		
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	// delay 1
	trigger('d1iniciar1a', [ 
        transition(':enter', [  
		animate('10s 0.2s ease', keyframes([
		  
		   style({ top: '50px' }),
          style({ top: '100px' }),
          style({ top: '200px' }),
		  style({ top: '300px' }),
          style({ top: '400px' }),
          style({ top: '500px' }),
          style({ top: '600px' }),
          style({ top: '700px' }),
		  style({ top: '800px' })
		  
        ])),
      ]),   
    ]),
	trigger('d1iniciar1b', [ 
        transition(':enter', [  
		animate('10s 0.2s ease', keyframes([
		  
		  style({ top: '60px' }),
          style({ top: '100px' }),
          style({ top: '210px' }),
		  style({ top: '310px' }),
          style({ top: '410px' }),
          style({ top: '510px' }),
          style({ top: '610px' }),
          style({ top: '710px' }),
		  style({ top: '810px' })		
		  
		  
        ])),
      ]),   
    ]),
	trigger('d1iniciar2', [ 
        transition(':enter', [  
		animate('10s 0.2s', keyframes([
		
		  style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translateX(+4px)'}),
          style({ transform: 'translateX(-4px)'}),
		   style({ transform: 'translateX(+4px)' }),
          style({ transform: 'translateX(-4px)'}),
          style({ transform: 'translateX(+4px)'}),
		   style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
           style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'}),
           style({ transform: 'translate(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'})
		  
        ])),
      ]),   
    ]),
	trigger('d1iniciar2a', [ 
        transition(':enter', [  
		animate('10s 0.2s', keyframes([
		
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
          style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'})
        ])),
      ]),   
    ]),
	trigger('d1iniciar3a', [ 
		transition(':enter', [
        animate('10s 0.2s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	trigger('d1iniciar3b', [ 
		transition(':enter', [
        animate('10s 0.2s', keyframes([
		
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
		// delay 2
	trigger('d2iniciar1a', [ 
        transition(':enter', [  
		animate('10s 0.5s ease', keyframes([

		  style({ top: '50px' }),
          style({ top: '100px' }),
          style({ top: '200px' }),
		  style({ top: '300px' }),
          style({ top: '400px' }),
          style({ top: '500px' }),
          style({ top: '600px' }),
          style({ top: '700px' }),
		  style({ top: '800px' })		  
		 
		  
        ])),
      ]),   
    ]),
	trigger('d2iniciar1b', [ 
        transition(':enter', [  
		animate('10s 0.5s ease', keyframes([
		  
		  style({ top: '60px' }),
          style({ top: '100px' }),
          style({ top: '210px' }),
		  style({ top: '310px' }),
          style({ top: '410px' }),
          style({ top: '510px' }),
          style({ top: '610px' }),
          style({ top: '710px' }),
		  style({ top: '810px' })		
		  

        ])),
      ]),   
    ]),
	trigger('d2iniciar2', [ 
        transition(':enter', [  
		animate('10s 0.5s ease', keyframes([
		
		  style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translateX(+4px)'}),
          style({ transform: 'translateX(-4px)'}),
		   style({ transform: 'translateX(+4px)' }),
          style({ transform: 'translateX(-4px)'}),
          style({ transform: 'translateX(+4px)'}),
		   style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
           style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'}),
           style({ transform: 'translate(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'})
		  
        ])),
      ]),   
    ]),
	trigger('d2iniciar2a', [ 
        transition(':enter', [  
		animate('10s 0.5s', keyframes([
		
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
          style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'})
        ])),
      ]),   
    ]),
	trigger('d2iniciar3a', [ 
		transition(':enter', [
        animate('10s 0.5s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	trigger('d2iniciar3b', [ 
		transition(':enter', [
        animate('10s 0.5s', keyframes([
		
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
			// delay 3
	trigger('d3iniciar1a', [ 
        transition(':enter', [  
		animate('10s 0.7s ease', keyframes([
		  
		  style({ top: '50px' }),
          style({ top: '100px' }),
          style({ top: '200px' }),
		  style({ top: '300px' }),
          style({ top: '400px' }),
          style({ top: '500px' }),
          style({ top: '600px' }),
          style({ top: '700px' }),
		  style({ top: '800px' })
		  
        ])),
      ]),   
    ]),
	trigger('d3iniciar1b', [ 
        transition(':enter', [  
		animate('10s 0.7s ease', keyframes([
		  
		  style({ top: '60px' }),
          style({ top: '100px' }),
          style({ top: '210px' }),
		  style({ top: '310px' }),
          style({ top: '410px' }),
          style({ top: '510px' }),
          style({ top: '610px' }),
          style({ top: '710px' }),
		  style({ top: '810px' })		
		  
		  
        ])),
      ]),   
    ]),
	trigger('d3iniciar2', [ 
        transition(':enter', [  
		animate('10s 0.7s ease', keyframes([
		
		  style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translateX(+4px)'}),
          style({ transform: 'translateX(-4px)'}),
		   style({ transform: 'translateX(+4px)' }),
          style({ transform: 'translateX(-4px)'}),
          style({ transform: 'translateX(+4px)'}),
		   style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
           style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'}),
           style({ transform: 'translate(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'})
		  
        ])),
      ]),   
    ]),
	trigger('d3iniciar2a', [ 
        transition(':enter', [  
		animate('10s 0.7s', keyframes([
		
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
          style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'})
        ])),
      ]),   
    ]),
	trigger('d3iniciar3a', [ 
		transition(':enter', [
        animate('10s 0.7s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	trigger('d3iniciar3b', [ 
		transition(':enter', [
        animate('10s 0.7s', keyframes([
		
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
				// delay 4
	trigger('d4iniciar1a', [ 
        transition(':enter', [  
		animate('10s 0.9s ease', keyframes([
		  
		  style({ top: '10px' }),
          style({ top: '30px' }),
          style({ top: '60px' }),
		  style({ top: '100px' }),
          style({ top: '150px' }),
          style({ top: '200px' }),
          style({ top: '250px' }),
          style({ top: '300px' }),
		  style({ top: '350px' }),
          style({ top: '400px' }),
          style({ top: '450px' }),
		  style({ top: '550px' }),
          style({ top: '600px' }),
          style({ top: '650px' }),
		  style({ top: '700px' }),
          style({ top: '750px' }),
          style({ top: '800px' })
		  
        ])),
      ]),   
    ]),
	trigger('d4iniciar1b', [ 
        transition(':enter', [  
		animate('10s 0.9s ease', keyframes([
		  
		  style({ top: '20px' }),
          style({ top: '40px' }),
          style({ top: '70px' }),
		  style({ top: '110px' }),
          style({ top: '160px' }),
          style({ top: '210px' }),
          style({ top: '260px' }),
          style({ top: '310px' }),
		  style({ top: '360px' }),
          style({ top: '410px' }),
          style({ top: '460px' }),
		  style({ top: '560px' }),
          style({ top: '610px' }),
          style({ top: '660px' }),
		  style({ top: '710px' }),
          style({ top: '760px' }),
          style({ top: '810px' })
		  
        ])),
      ]),   
    ]),
	trigger('d4iniciar2', [ 
        transition(':enter', [  
		animate('10s 0.9s ease', keyframes([
		
		  style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translateX(+4px)'}),
          style({ transform: 'translateX(-4px)'}),
		   style({ transform: 'translateX(+4px)' }),
          style({ transform: 'translateX(-4px)'}),
          style({ transform: 'translateX(+4px)'}),
		   style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
           style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'}),
           style({ transform: 'translate(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'})
		  
        ])),
      ]),   
    ]),
	trigger('d4iniciar2a', [ 
        transition(':enter', [  
		animate('10s 0.9s', keyframes([
		
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
          style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'})
        ])),
      ]),   
    ]),
	trigger('d4iniciar3a', [ 
		transition(':enter', [
        animate('10s 0.9s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	trigger('d4iniciar3b', [ 
		transition(':enter', [
        animate('10s 0.9s', keyframes([
		
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
					// delay 5
	trigger('d5iniciar1a', [ 
        transition(':enter', [  
		animate('10s 1.1s ease', keyframes([
		  
		  style({ top: '10px' }),
          style({ top: '30px' }),
          style({ top: '60px' }),
		  style({ top: '100px' }),
          style({ top: '150px' }),
          style({ top: '200px' }),
          style({ top: '250px' }),
          style({ top: '300px' }),
		  style({ top: '350px' }),
          style({ top: '400px' }),
          style({ top: '450px' }),
		  style({ top: '550px' }),
          style({ top: '600px' }),
          style({ top: '650px' }),
		  style({ top: '700px' }),
          style({ top: '750px' }),
          style({ top: '800px' })
		  
        ])),
      ]),   
    ]),
	trigger('d5iniciar1b', [ 
        transition(':enter', [  
		animate('10s 1.1s ease', keyframes([
		  
		  style({ top: '20px' }),
          style({ top: '40px' }),
          style({ top: '70px' }),
		  style({ top: '110px' }),
          style({ top: '160px' }),
          style({ top: '210px' }),
          style({ top: '260px' }),
          style({ top: '310px' }),
		  style({ top: '360px' }),
          style({ top: '410px' }),
          style({ top: '460px' }),
		  style({ top: '560px' }),
          style({ top: '610px' }),
          style({ top: '660px' }),
		  style({ top: '710px' }),
          style({ top: '760px' }),
          style({ top: '810px' })
		  
        ])),
      ]),   
    ]),
	trigger('d5iniciar2', [ 
        transition(':enter', [  
		animate('10s 1.1s ease', keyframes([
		
		  style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translateX(+4px)'}),
          style({ transform: 'translateX(-4px)'}),
		   style({ transform: 'translateX(+4px)' }),
          style({ transform: 'translateX(-4px)'}),
          style({ transform: 'translateX(+4px)'}),
		   style({ transform: 'translateX(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
           style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'}),
           style({ transform: 'translate(-4px)' }),
          style({ transform: 'translate(+4px)'}),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)' }),
          style({ transform: 'translate(-4px)'}),
          style({ transform: 'translate(+4px)'})
		  
        ])),
      ]),   
    ]),
	trigger('d5iniciar2a', [ 
        transition(':enter', [  
		animate('10s 1.1s', keyframes([
		
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
          style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'}),
		  style({ transform: 'rotateZ(90deg)' }),
          style({ transform: 'rotateY(150deg)'})
        ])),
      ]),   
    ]),
	trigger('d5iniciar3a', [ 
		transition(':enter', [
        animate('10s 1.1s', keyframes([
		
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ color: 'blue' }),
          style({ color: 'red' }),
          style({ color: 'orange' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ]),
	trigger('d5iniciar3b', [ 
		transition(':enter', [
        animate('10s 1.1s', keyframes([
		
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
          style({ color: '#FFD700' }),
          style({ color: '#C0C0C0' }),
		  style({ fontWeight: '0' }),
		  style({ fontSize: '0' })
		  
        ])),
      ]),   
    ])
	]
})
export class Animacion1Component implements OnInit {

	ngOnInit(){
	this.reproducir();
	}

archivoAudio:string='assets/sounds/efectos/aplausos.mp3';

		reproducir() {
        const audio = new Audio(this.archivoAudio);
        audio.play();
		}

img1:string='\u2307  | ';   
img2:string='\u2307  | ';
img3:string='\u2307  ';  
img4:string='\u25A0  |';  
img5:string='\u25AE';
img6:string='\u2307  ';
img7:string='\u25A0  |';   
img8:string='\u25AE';
img9:string='\u25C6';
img10:string=' | \u2307 ';   
img11:string=' | \u2307 ';
img12:string='\u25C6  |';
img13:string='\u25A0';   
img14:string='\u2307  ';
img15:string=' | \u2307 ';
img16:string='\u25A0';   
img17:string='\u25AE  |';
img18:string=' | \u2307 ';


img19:string='\u2307  | ';   
img20:string='\u2307  ';
img21:string=' | \u2307 ';
img22:string=' \u2307  |';   
img23:string='\u2307 ';
img24:string='| \u2307';

}
