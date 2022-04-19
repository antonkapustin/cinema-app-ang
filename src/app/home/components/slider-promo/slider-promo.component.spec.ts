import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPromoComponent } from './slider-promo.component';

describe('SliderPromoComponent', () => {
  let component: SliderPromoComponent;
  let fixture: ComponentFixture<SliderPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
