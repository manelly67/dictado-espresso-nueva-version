import { Component, OnInit } from '@angular/core';

import { DefinirAudioService } from '../definir-audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

constructor(public definirAudioService: DefinirAudioService){}

archivoAudio:string='';
	
	ngOnInit(){
	this.archivoAudio = this.definirAudioService.definirAudio(this.definirAudioService.nivel,this.definirAudioService.nro);
	}

	
// UTILIZAR PARA REPRODUCIR AUDIO DIRECTO DESDE UN BOTON - SIN PAUSAR
		/* reproducir() {
        const audio = new Audio(this.archivoAudio);
        audio.play();
		} */

		
}
