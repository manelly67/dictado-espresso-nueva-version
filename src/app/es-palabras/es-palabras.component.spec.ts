import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsPalabrasComponent } from './es-palabras.component';

describe('EsPalabrasComponent', () => {
  let component: EsPalabrasComponent;
  let fixture: ComponentFixture<EsPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsPalabrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
