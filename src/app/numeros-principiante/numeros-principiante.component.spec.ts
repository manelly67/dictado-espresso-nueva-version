import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPrincipianteComponent } from './numeros-principiante.component';

describe('NumerosPrincipianteComponent', () => {
  let component: NumerosPrincipianteComponent;
  let fixture: ComponentFixture<NumerosPrincipianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosPrincipianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
