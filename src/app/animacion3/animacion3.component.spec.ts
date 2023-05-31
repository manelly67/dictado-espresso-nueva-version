import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacion3Component } from './animacion3.component';

describe('Animacion3Component', () => {
  let component: Animacion3Component;
  let fixture: ComponentFixture<Animacion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animacion3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
