import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarNumeroComponent } from './ingresar-numero.component';

describe('IngresarNumeroComponent', () => {
  let component: IngresarNumeroComponent;
  let fixture: ComponentFixture<IngresarNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarNumeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
