import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyameComponent } from './apoyame.component';

describe('ApoyameComponent', () => {
  let component: ApoyameComponent;
  let fixture: ComponentFixture<ApoyameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoyameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
