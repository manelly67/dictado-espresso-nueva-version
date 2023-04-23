import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSecuencialComponent } from './es-secuencial.component';

describe('EsSecuencialComponent', () => {
  let component: EsSecuencialComponent;
  let fixture: ComponentFixture<EsSecuencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsSecuencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsSecuencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
