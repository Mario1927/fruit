import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IFruit } from 'src/app/interface/Fruit';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-fruit-order',
  templateUrl: './fruit-order.component.html',
  styleUrls: ['./fruit-order.component.css']
})
export class FruitOrderComponent implements OnInit {

  faEye = faEye;

  public fruits: IFruit[] = [];

  constructor(private fruitService: FruitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fruitService.getFruitsByOrder(this.route.snapshot.params['order']).subscribe({
      next: (response: IFruit[]) => this.fruits = response,
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
