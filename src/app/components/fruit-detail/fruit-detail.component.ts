import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IFruit } from 'src/app/interface/Fruit';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

  faEye = faEye;

  public fruit: IFruit;

  constructor(private fruitService: FruitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fruitService.getFruitsByName(this.route.snapshot.params['name']).subscribe({
      next: (response: IFruit) => this.fruit = response,
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
