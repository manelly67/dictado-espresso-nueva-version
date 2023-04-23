import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsRandomComponent } from './es-random.component';

describe('EsRandomComponent', () => {
  let component: EsRandomComponent;
  let fixture: ComponentFixture<EsRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
