import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictadoptAvanzadoComponent } from './dictadopt-avanzado.component';

describe('DictadoptAvanzadoComponent', () => {
  let component: DictadoptAvanzadoComponent;
  let fixture: ComponentFixture<DictadoptAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictadoptAvanzadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictadoptAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
