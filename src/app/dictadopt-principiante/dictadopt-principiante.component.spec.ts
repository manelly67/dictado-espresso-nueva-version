import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictadoptPrincipianteComponent } from './dictadopt-principiante.component';

describe('DictadoptPrincipianteComponent', () => {
  let component: DictadoptPrincipianteComponent;
  let fixture: ComponentFixture<DictadoptPrincipianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictadoptPrincipianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictadoptPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
