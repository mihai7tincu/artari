import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
