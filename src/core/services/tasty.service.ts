import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TastyService {
  private baseUrl: string = 'https://tasty.p.rapidapi.com/recipes/';
  headers = {
    'x-rapidapi-key': 'e7b5e6bac5mshc9941ddc842ff6fp182cbbjsn8f7bcdf9d123',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'

  };

  constructor(private http: HttpClient) {}

  getRecipeById(id: number): Observable<any> {


    return this.http.get(`${this.baseUrl}get-more-info`, {
      params: new HttpParams().set('id', id.toString()),
      headers: this.headers
    });
  }


  getRecipes(params: any = {}): Observable<any> {
    return this.http.get(this.baseUrl + 'list', {
      params: new HttpParams({ fromObject: params }),
      headers:this.headers
    });
  }
}
