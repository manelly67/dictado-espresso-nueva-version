import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacion2Component } from './animacion2.component';

describe('Animacion2Component', () => {
  let component: Animacion2Component;
  let fixture: ComponentFixture<Animacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animacion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
