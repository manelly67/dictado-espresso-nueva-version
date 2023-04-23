import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosIntermedio2Component } from './numeros-intermedio2.component';

describe('NumerosIntermedio2Component', () => {
  let component: NumerosIntermedio2Component;
  let fixture: ComponentFixture<NumerosIntermedio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosIntermedio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosIntermedio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
