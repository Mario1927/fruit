import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitGenusComponent } from './fruit-genus.component';

describe('FruitGenusComponent', () => {
  let component: FruitGenusComponent;
  let fixture: ComponentFixture<FruitGenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitGenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitGenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
