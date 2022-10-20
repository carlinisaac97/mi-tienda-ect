import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  baseUrl = 'https://api.escuelajs.co/api/v1/categories';

  constructor(private http: HttpClient) {}


  getCategory(){
    return this.http.get(`${this.baseUrl}?offset=0&limit=10`);
  }
}
