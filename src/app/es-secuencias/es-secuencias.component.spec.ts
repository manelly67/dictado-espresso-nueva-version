import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSecuenciasComponent } from './es-secuencias.component';

describe('EsSecuenciasComponent', () => {
  let component: EsSecuenciasComponent;
  let fixture: ComponentFixture<EsSecuenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsSecuenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsSecuenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
