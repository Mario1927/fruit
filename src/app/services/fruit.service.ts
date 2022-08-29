import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IFruit } from '../interface/Fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private url = 'https://fruityvice.com/api/fruit/all';

  public headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  public requestOptions: Object = {
    headers: this.headers,
    resposeType: 'text'
  }

  constructor(private http: HttpClient) { }

  public getFruits(): Observable<IFruit[]> {
    return this.http.get<IFruit[]>(this.url, this.requestOptions);
  }
}
