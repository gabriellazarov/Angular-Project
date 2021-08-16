import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToPlayComponent } from './plan-to-play.component';

describe('PlanToPlayComponent', () => {
  let component: PlanToPlayComponent;
  let fixture: ComponentFixture<PlanToPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanToPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
