import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitMainComponent } from './fruit-main.component';

describe('FruitMainComponent', () => {
  let component: FruitMainComponent;
  let fixture: ComponentFixture<FruitMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
