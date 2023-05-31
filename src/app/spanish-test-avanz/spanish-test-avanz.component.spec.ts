import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishTestAvanzComponent } from './spanish-test-avanz.component';

describe('SpanishTestAvanzComponent', () => {
  let component: SpanishTestAvanzComponent;
  let fixture: ComponentFixture<SpanishTestAvanzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishTestAvanzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanishTestAvanzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
