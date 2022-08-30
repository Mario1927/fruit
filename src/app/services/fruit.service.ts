import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IFruit } from '../interface/Fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private url = 'https://cors-anywhere.herokuapp.com/fruityvice.com/api/fruit/';

  constructor(private http: HttpClient) { }

  public getFruits(): Observable<IFruit[]> {
    return this.http.get<IFruit[]>(`${this.url}/all`);
  }

  public getFruitsByName(name: string): Observable<IFruit> {
    return this.http.get<IFruit>(`${this.url}/${name}`);
  }

  public getFruitsByFamily(family: string): Observable<IFruit[]> {
    return this.http.get<IFruit[]>(`${this.url}/family/${family}`)
  }

  public getFruitsByGenus(genus: string): Observable<IFruit[]> {
    return this.http.get<IFruit[]>(`${this.url}/genus/${genus}`)
  }

  public getFruitsByOrder(order: string): Observable<IFruit[]> {
    return this.http.get<IFruit[]>(`${this.url}/order/${order}`)
  }
}
