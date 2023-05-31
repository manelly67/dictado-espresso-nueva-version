import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeTestComponent } from './base-de-test.component';

describe('BaseDeTestComponent', () => {
  let component: BaseDeTestComponent;
  let fixture: ComponentFixture<BaseDeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
