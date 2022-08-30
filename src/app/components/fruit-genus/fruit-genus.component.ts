import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IFruit } from 'src/app/interface/Fruit';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-fruit-genus',
  templateUrl: './fruit-genus.component.html',
  styleUrls: ['./fruit-genus.component.css']
})
export class FruitGenusComponent implements OnInit {

  faEye = faEye;

  public fruits: IFruit[] = [];

  constructor(private fruitService: FruitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fruitService.getFruitsByGenus(this.route.snapshot.params['genus']).subscribe({
      next: (response: IFruit[]) => this.fruits = response,
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
