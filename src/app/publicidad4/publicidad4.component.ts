import { Component, Input } from '@angular/core';

import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-publicidad4',
  templateUrl: './publicidad4.component.html',
  styleUrls: ['./publicidad4.component.css']
})
export class Publicidad4Component implements AdComponent{

@Input() data: any;

}
