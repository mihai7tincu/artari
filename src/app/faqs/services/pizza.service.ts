import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  rootUrl: string = 'http://localhost:5003/api/pizza';

  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${this.rootUrl}/get-all`);
  }

  get(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.rootUrl}/get/${id}`);
  }

  create(model: Pizza): Observable<number> {
    return this.http.post<number>(`${this.rootUrl}/create`, model);
  }

  edit(model: Pizza): Observable<number> {
    return this.http.post<number>(`${this.rootUrl}/edit/${model.id}`, model);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.rootUrl}/delete/${id}`);
  }
}
