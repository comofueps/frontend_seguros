import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from '../models/teambea_personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  api_uri_nodejs = 'http://localhost:5000';
  base_path = `${this.api_uri_nodejs}/personas`

  constructor(
    private http: HttpClient
  ) { }

  getAllPersonas(): Observable<{ persona: IPersona[] }> {
    return this.http
      .get<{ persona: IPersona[] }>(this.base_path)
  }

  createPersona(data: any): Observable<IPersona> {
    console.log(data)
    return this.http.post<IPersona>(this.base_path, data)
  }

}
