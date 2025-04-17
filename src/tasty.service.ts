import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TastyService {
  private baseUrl: string = 'https://tasty.p.rapidapi.com/recipes/';
  headers = {
    'x-rapidapi-key': '0ff44d6730mshc0ecfc5c666cdf6p1ffceajsn75e05042f178',
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
