import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictadoAvanzadoComponent } from './dictado-avanzado.component';

describe('DictadoAvanzadoComponent', () => {
  let component: DictadoAvanzadoComponent;
  let fixture: ComponentFixture<DictadoAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictadoAvanzadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictadoAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
