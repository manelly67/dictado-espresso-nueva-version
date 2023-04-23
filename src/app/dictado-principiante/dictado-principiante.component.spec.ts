import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictadoPrincipianteComponent } from './dictado-principiante.component';

describe('DictadoPrincipianteComponent', () => {
  let component: DictadoPrincipianteComponent;
  let fixture: ComponentFixture<DictadoPrincipianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictadoPrincipianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictadoPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
