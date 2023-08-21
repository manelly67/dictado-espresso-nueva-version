import { Injectable } from '@angular/core';

import { playStatus } from './playstatus';
import { INICIO } from './INICIO';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
   /**
   * Math Random para generar un random y multiplicamos por 3
   * Redondeamos el entero superior, quedando 0,1,2 como posibles resultados
   * y con ello selecciona Piedra (r), Papel (p) ó Tijera (s)
   */
  getComputerChoice(): string {
    const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }
  
 
 playStatus: playStatus[]=INICIO; 
 
// definir el resultado de cada jugada con en forma de objeto playStatus 
  
 game(userChoice: string): playStatus[] {
    
	const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);
    
	
	switch (playUserComp){
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
	  this.playStatus = [{
          message: this.texto1,
          userAdd: 1,
          compAdd: 0,
        }];
        // win(userChoice, computerChoice);
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
	  this.playStatus = [{
          message: this.texto2,
          userAdd: 0,
          compAdd: 1,
        }];
        // lose(userChoice, computerChoice);
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
	  this.playStatus = [{
          message: this.texto3,
          userAdd: 0,
          compAdd: 0,
        }];
        // draw(userChoice, computerChoice);
        break;	
		}
	return this.playStatus;	
	}
	
	

	
// convertir el objeto playStatus en tres respuestas un string y dos numeros	

   // inicio definir mensaje
re1:number = 0;
re2:number = 0;
re1a:number = 0;
re2a:number = 0;
mensaje: string ='';


	definirMensaje<Type>( arg1:string|undefined, arg2:string, arg3:string): string {
	if (arg1==''||arg1==undefined){
		this.mensaje = '';		
		}else{
		this.mensaje = '';	
		
		this.re1 = arg1.indexOf(arg2);
		this.re2 = arg1.indexOf(arg3);
		this.re1a = this.re1+10;
		this.re2a = this.re2-3;
		this.mensaje = arg1.substring(this.re1a,this.re2a);
		
		}
	return this.mensaje;
	}

   // inicio definir userAdd

add1:number = 0;
add1a:number = 0;
add2a:number = 0;
userAdd: number = 0;

	definirUserAdd<Type>( arg1:string|undefined, arg2:string): number {
	if (arg1==''||arg1==undefined){
		this.userAdd = 0;		
		}else{
		this.userAdd = 0;	
		
		this.add1 = arg1.indexOf(arg2);
		this.add1a = this.add1+9;
		this.add2a = this.add1+10;
		this.userAdd = Number(arg1.substring(this.add1a,this.add2a));
		
		}
	return this.userAdd;
	}

   // inicio definir compAdd

comp1:number = 0;
comp1a:number = 0;
comp2a:number = 0;
compAdd: number = 0;

	definirCompAdd<Type>( arg1:string|undefined, arg2:string): number {
	if (arg1==''||arg1==undefined){
		this.compAdd = 0;		
		}else{
		this.compAdd = 0;	
		
		this.comp1 = arg1.indexOf(arg2);
		this.comp1a = this.comp1+9;
		this.comp2a = this.comp1+10;
		this.compAdd = Number(arg1.substring(this.comp1a,this.comp2a));
		
		}
	return this.compAdd;
	}

resultFinal:string='';
	
resultadoFinal(arg1:number,arg2:number):string{

	if (arg1 > arg2){
		  this.resultFinal = this.texto4;
		  }else{
	if (arg1 < arg2){
		  this.resultFinal = this.texto5;
		  }}
	return this.resultFinal;

}
	
		

showPT?:boolean;
showSP?:boolean;
texto1:string='You win against the computer';
texto2:string='Computer wins';
texto3:string='You and the computer have tied';
texto4:string='Congratulations, you beat the computer on move Nro.';
texto5:string='The computer beat you on move Nro.';


 idiomaTexto(arg1:boolean|undefined,arg2:boolean|undefined):string {
	if (arg1 == true){
	this.texto1 = 'Tu venceste o computador';
	this.texto2 = 'O computador vence';
	this.texto3 = 'Tu e o computador empataram';
	this.texto4 = 'Parabéns, venceste o computador na jogada nº:';
	this.texto5 = 'O computador venceu-te na jogada nº:';
	}else{
	if (arg2 == true){
	this.texto1 = 'Tú le ganas a la computadora';
	this.texto2 = 'La computadora gana';
	this.texto3 = 'La computadora y tú han empatado';
	this.texto4 = 'Felicitaciones, le ganaste a la computadora en la jugada Nro.';
	this.texto5 = 'La computadora te ganó en la jugada Nro.';
	}}
 return this.texto1;
 return this.texto2;
 return this.texto3;
 return this.texto4;
 return this.texto5;
 
 } 
  
}
