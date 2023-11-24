import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvolucrar } from '../models/teambea_involucrar';

@Injectable({
  providedIn: 'root'
})
export class InvolucrarService {
  api_uri_nodejs = 'http://localhost:5000';
  base_path = `${this.api_uri_nodejs}/involucrar`

  constructor(
    private http: HttpClient
  ) { }

  getAllInvolucrar(): Observable<{ involucrar: IInvolucrar[] }> {
    return this.http
      .get<{ involucrar: IInvolucrar[] }>(this.base_path)
  }
  createInvolucrar(data: any): Observable<IInvolucrar> {
    console.log(data)
    return this.http.post<IInvolucrar>(this.base_path, data)
  }
}
