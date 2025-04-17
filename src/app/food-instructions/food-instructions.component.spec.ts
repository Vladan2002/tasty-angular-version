import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodInstructionsComponent } from './food-instructions.component';

describe('FoodInstructionsComponent', () => {
  let component: FoodInstructionsComponent;
  let fixture: ComponentFixture<FoodInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
