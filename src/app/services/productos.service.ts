import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  baseUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}


  getProducts(){
    return this.http.get(`${this.baseUrl}?offset=0&limit=10`);
  }
}
