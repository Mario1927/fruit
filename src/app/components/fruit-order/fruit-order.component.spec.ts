import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitOrderComponent } from './fruit-order.component';

describe('FruitOrderComponent', () => {
  let component: FruitOrderComponent;
  let fixture: ComponentFixture<FruitOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
