import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugueseTestComponent } from './portuguese-test.component';

describe('PortugueseTestComponent', () => {
  let component: PortugueseTestComponent;
  let fixture: ComponentFixture<PortugueseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortugueseTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortugueseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
