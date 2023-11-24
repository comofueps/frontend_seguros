import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDocumento } from '../models/teambea_documentos';
@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  api_uri_nodejs = 'http://localhost:5000';
  base_path = `${this.api_uri_nodejs}/possers`

  constructor(
    private http: HttpClient
  ) { }

  getAllDocumentos(): Observable<{ posser: IDocumento[] }> {
    return this.http
      .get<{ posser: IDocumento[] }>(this.base_path)
  }

  createDocumento(data: any): Observable<IDocumento> {
    console.log(data)
    return this.http.post<IDocumento>(this.base_path, data)
  }
}
