import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion3',
  templateUrl: './animacion3.component.html',
  styleUrls: ['./animacion3.component.css']
})
export class Animacion3Component implements OnInit {

ngOnInit(){
	this.reproducir();
	}

archivoAudio:string='assets/sounds/efectos/aplausos.3gpp';

		reproducir() {
        const audio = new Audio(this.archivoAudio);
        audio.play();
		}

}
