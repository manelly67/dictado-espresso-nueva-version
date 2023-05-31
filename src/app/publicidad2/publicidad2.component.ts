import { Component, Input } from '@angular/core';

import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-publicidad2',
  templateUrl: './publicidad2.component.html',
  styleUrls: ['./publicidad2.component.css']
})
export class Publicidad2Component implements AdComponent {

@Input() data: any;

}
