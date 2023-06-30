import { Component, Input } from '@angular/core';

import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-publicidad3',
  templateUrl: './publicidad3.component.html',
  styleUrls: ['./publicidad3.component.css']
})
export class Publicidad3Component implements AdComponent{

@Input() data: any;

}
