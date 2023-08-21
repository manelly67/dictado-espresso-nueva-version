import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  
  title: string = '';
  title1: string = '';
  title2: string = '';
  newPlay: string = '';
  
  jugada: string = '';
  result: string = '';
  resultFinal: string = '';
 
  userAdd: number = 0;
  compAdd: number = 0;
  pointsUser: number = 0;
  pointsComp: number =  0;
  
  contador: number = 0;
  topScore: boolean = false;
  underScore: boolean = true;
  

constructor(private playGame: GameService) {}

  ngOnInit(): void {
    this.result = 'Waiting for a move...';
	this.title = 'Rock, Paper, Scissors!';
	this.title1 = 'Number of moves =';
	this.title2 = 'Select your move';
	this.newPlay = 'Play again';
	this.pointsUser = 0;
	this.pointsComp = 0;
	this.topScore = false;
	this.underScore = true;
  }
  
showPT?:boolean;
showSP?:boolean;

  playSP(){
this.showPT = false;
this.showSP = true;
this.title = '¡Piedra, Papel o Tijeras!';
this.title1 = 'Nro de jugadas = ';
this.title2 = 'Selecciona tu jugada';
this.result = 'Esperando jugada...';
this.newPlay = 'Juega otra vez';

}
 playPT(){
this.showPT = true;
this.showSP = false;
this.title = 'Pedra, Papel ou Tesoura!';
this.title1 = 'N.º de jogadas = ';
this.title2 = 'Seleccione a sua jogada';
this.result = 'À espera de uma jogada...';
this.newPlay = 'Jogar de novo';

}

  
  play(choice: string): void{

	this.playGame.idiomaTexto(this.showPT,this.showSP);
	
	this.jugada = JSON.stringify(this.playGame.game(choice));    // realiza la jugada en el service playGame y convierte el resultado en string
	this.result = this.playGame.definirMensaje(this.jugada,'message','userAdd');
    this.userAdd = this.playGame.definirUserAdd(this.jugada,'userAdd');
	
	
	this.pointsUser += this.userAdd;
	this.compAdd = this.playGame.definirCompAdd(this.jugada,'compAdd');
	this.pointsComp += this.compAdd;
	this.contador +=1;
	
	if (this.pointsUser > 9 || this.pointsComp > 9){   // una vez que el score alcanza el numero 10 emite el resultado final
	this.topScore = true;
	this.underScore  = false;
	this.resultFinal =  this.playGame.resultadoFinal(this.pointsUser,this.pointsComp);   
	}
	
  }
  
  playAgain(){
	this.result = 'Waiting for a move...';
	this.title = 'Rock, Paper, Scissors!';
	this.title1 = 'Number of moves =';
	this.title2 = 'Select your move';
	this.newPlay = 'Play again';
	this.userAdd = 0;
	this.compAdd = 0;
	this.contador = 0;
	this.pointsUser = 0;
	this.pointsComp = 0;
	this.topScore = false;
	this.underScore = true;
	this.jugada = '';
    this.resultFinal = '';  
  }

}
