import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosAvanzadoComponent } from './numeros-avanzado.component';

describe('NumerosAvanzadoComponent', () => {
  let component: NumerosAvanzadoComponent;
  let fixture: ComponentFixture<NumerosAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosAvanzadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
