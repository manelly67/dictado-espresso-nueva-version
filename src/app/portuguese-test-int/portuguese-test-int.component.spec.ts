import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugueseTestIntComponent } from './portuguese-test-int.component';

describe('PortugueseTestIntComponent', () => {
  let component: PortugueseTestIntComponent;
  let fixture: ComponentFixture<PortugueseTestIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortugueseTestIntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortugueseTestIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
