import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictadoptIntermedioComponent } from './dictadopt-intermedio.component';

describe('DictadoptIntermedioComponent', () => {
  let component: DictadoptIntermedioComponent;
  let fixture: ComponentFixture<DictadoptIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictadoptIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictadoptIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
