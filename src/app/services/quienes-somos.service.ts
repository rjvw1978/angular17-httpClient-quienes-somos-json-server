import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {
  url: string= "http://localhost:3000/profesionals";

  constructor(private http:HttpClient) { }

  obtenerProfesionales(): Observable<any>
  {
    return this.http.get(this.url);
  }
}

