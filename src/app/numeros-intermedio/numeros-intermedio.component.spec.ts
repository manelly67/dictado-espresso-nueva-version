import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosIntermedioComponent } from './numeros-intermedio.component';

describe('NumerosIntermedioComponent', () => {
  let component: NumerosIntermedioComponent;
  let fixture: ComponentFixture<NumerosIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
