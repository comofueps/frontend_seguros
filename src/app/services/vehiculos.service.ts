import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVehiculo } from '../models/teambea_vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  api_uri_nodejs = 'http://localhost:5000';
  base_path = `${this.api_uri_nodejs}/vehiculos`

  constructor(
    private http: HttpClient
  ) { }

  getAllVehiculos(): Observable<{ vehiculo: IVehiculo[] }> {
    return this.http
      .get<{ vehiculo: IVehiculo[] }>(this.base_path)
  }

  createVehiculo(data: any): Observable<IVehiculo> {
    console.log(data)
    return this.http.post<IVehiculo>(this.base_path, data)
  }

}

