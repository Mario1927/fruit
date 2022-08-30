import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IFruit } from 'src/app/interface/Fruit';
import { FruitService } from '../../services/fruit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruit-family',
  templateUrl: './fruit-family.component.html',
  styleUrls: ['./fruit-family.component.css']
})
export class FruitFamilyComponent implements OnInit {

  faEye = faEye;

  public fruits: IFruit[] = [];

  constructor(private fruitService: FruitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fruitService.getFruitsByFamily(this.route.snapshot.params['family']).subscribe({
      next: (response: IFruit[]) => this.fruits = response,
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
