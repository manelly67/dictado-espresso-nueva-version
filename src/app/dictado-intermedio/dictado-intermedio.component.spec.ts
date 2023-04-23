import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictadoIntermedioComponent } from './dictado-intermedio.component';

describe('DictadoIntermedioComponent', () => {
  let component: DictadoIntermedioComponent;
  let fixture: ComponentFixture<DictadoIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictadoIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictadoIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
