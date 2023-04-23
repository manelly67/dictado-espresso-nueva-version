import { Component, Output, EventEmitter, OnInit} from '@angular/core';

import { TecladoService } from '../teclado.service';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit{

constructor(public tecladoService: TecladoService) { }


@Output() notifyA1 = new EventEmitter ();
@Output() notifyA2 = new EventEmitter ();
@Output() notifyA3 = new EventEmitter ();
@Output() notifyA4 = new EventEmitter ();
@Output() notifyC = new EventEmitter ();
@Output() notifyE1 = new EventEmitter ();
@Output() notifyE2 = new EventEmitter ();
@Output() notifyI = new EventEmitter ();
@Output() notifyO1 = new EventEmitter ();
@Output() notifyO2 = new EventEmitter ();
@Output() notifyO3 = new EventEmitter ();
@Output() notifyU1 = new EventEmitter ();
@Output() notifyU2 = new EventEmitter ();
@Output() notifyN = new EventEmitter ();
@Output() notifyInterr = new EventEmitter ();
@Output() notifyExclam = new EventEmitter ();

showPT?:boolean;
showSP?:boolean;

ngOnInit(){
this.showPT = this.tecladoService.definirTecladoPT(this.tecladoService.nivelcategoria);
this.showSP = this.tecladoService.definirTecladoSP(this.tecladoService.nivelcategoria);
}

cambiarTecladodePTaSP(){
this.showPT = false;
this.showSP = true;
}
cambiarTecladodeSPaPT(){
this.showPT = true;
this.showSP = false;
}


}
