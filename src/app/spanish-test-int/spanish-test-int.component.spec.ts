import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishTestIntComponent } from './spanish-test-int.component';

describe('SpanishTestIntComponent', () => {
  let component: SpanishTestIntComponent;
  let fixture: ComponentFixture<SpanishTestIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishTestIntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanishTestIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
