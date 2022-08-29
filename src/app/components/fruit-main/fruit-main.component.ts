import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFruit } from '../../interface/Fruit';
import { FruitService } from '../../services/fruit.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fruit-main',
  templateUrl: './fruit-main.component.html',
  styleUrls: ['./fruit-main.component.css']
})
export class FruitMainComponent implements OnInit {

  faEye = faEye;

  public fruits: IFruit[] = [];

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruitService.getFruits().subscribe({
      next: (response: IFruit[]) => this.fruits = response,
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
