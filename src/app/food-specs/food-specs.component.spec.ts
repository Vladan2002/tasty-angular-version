import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSpecsComponent } from './food-specs.component';

describe('FoodSpecsComponent', () => {
  let component: FoodSpecsComponent;
  let fixture: ComponentFixture<FoodSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodSpecsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
