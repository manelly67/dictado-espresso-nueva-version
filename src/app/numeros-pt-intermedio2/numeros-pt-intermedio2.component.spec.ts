import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPtIntermedio2Component } from './numeros-pt-intermedio2.component';

describe('NumerosPtIntermedio2Component', () => {
  let component: NumerosPtIntermedio2Component;
  let fixture: ComponentFixture<NumerosPtIntermedio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosPtIntermedio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosPtIntermedio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
