import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressPtComponent } from './in-progress-pt.component';

describe('InProgressPtComponent', () => {
  let component: InProgressPtComponent;
  let fixture: ComponentFixture<InProgressPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressPtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
