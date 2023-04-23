import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPTPrincipianteComponent } from './numeros-pt-principiante.component';

describe('NumerosPTPrincipianteComponent', () => {
  let component: NumerosPTPrincipianteComponent;
  let fixture: ComponentFixture<NumerosPTPrincipianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosPTPrincipianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosPTPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
