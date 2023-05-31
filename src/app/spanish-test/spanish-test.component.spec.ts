import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishTestComponent } from './spanish-test.component';

describe('SpanishTestComponent', () => {
  let component: SpanishTestComponent;
  let fixture: ComponentFixture<SpanishTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanishTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
