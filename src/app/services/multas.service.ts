import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMulta } from '../models/teambea_multas';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  api_uri_nodejs = 'http://localhost:5000';
  base_path = `${this.api_uri_nodejs}/multas`

  constructor(
    private http: HttpClient
  ) { }

  getAllMultas(): Observable<{ multa: IMulta[] }> {
    return this.http
      .get<{ multa: IMulta[] }>(this.base_path)
  }

  createMulta(data: any): Observable<IMulta> {
    console.log(data)
    return this.http.post<IMulta>(this.base_path, data)
  }
}
