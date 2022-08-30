import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitFamilyComponent } from './fruit-family.component';

describe('FruitFamilyComponent', () => {
  let component: FruitFamilyComponent;
  let fixture: ComponentFixture<FruitFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
