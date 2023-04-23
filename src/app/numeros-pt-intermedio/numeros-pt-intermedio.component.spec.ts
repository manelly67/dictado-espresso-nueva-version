import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPTIntermedioComponent } from './numeros-pt-intermedio.component';

describe('NumerosPTIntermedioComponent', () => {
  let component: NumerosPTIntermedioComponent;
  let fixture: ComponentFixture<NumerosPTIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosPTIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosPTIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
