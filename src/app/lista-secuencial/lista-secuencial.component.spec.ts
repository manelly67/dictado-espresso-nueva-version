import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSecuencialComponent } from './lista-secuencial.component';

describe('ListaSecuencialComponent', () => {
  let component: ListaSecuencialComponent;
  let fixture: ComponentFixture<ListaSecuencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSecuencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSecuencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
