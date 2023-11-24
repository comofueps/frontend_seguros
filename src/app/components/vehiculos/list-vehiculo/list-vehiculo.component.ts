import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVehiculo } from 'src/app/models/teambea_vehiculos';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.css']
})
export class ListVehiculoComponent implements OnInit {

  vehiculos: IVehiculo[] = [];

  constructor(
    private vehiculoService: VehiculoService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.mostrarPersonas()
  }

  mostrarPersonas() {
    this.vehiculoService.getAllVehiculos()
      .subscribe({
        next: (data) => {
          this.vehiculos = data.vehiculo
          console.log(this.vehiculos)
        }
      })
  }

  // llenarVehiculo() {

  //   this.vehiculos = [
  //     {
  //       matricula: "ABC-123",
  //       marca: "Toyota",
  //       modelo: "Corolla"


  //     },
  //     {
  //       matricula: "XYZ-789",
  //       marca: "Honda",
  //       modelo: "Civic"
  //     },
  //     {
  //       matricula: "LMN-456",
  //       marca: "Ford",
  //       modelo: "Focus"

  //     }

  //   ]

  // }

}
