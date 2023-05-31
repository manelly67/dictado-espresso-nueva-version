import { Component, Input } from '@angular/core';

import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-publicidad1',
  templateUrl: './publicidad1.component.html',
  styleUrls: ['./publicidad1.component.css']
})
export class Publicidad1Component implements AdComponent{

@Input() data: any;

}
