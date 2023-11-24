import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMulta } from 'src/app/models/teambea_multas';
import { MultaService } from 'src/app/services/multas.service';


@Component({
  selector: 'app-list-multas',
  templateUrl: './list-multas.component.html',
  styleUrls: ['./list-multas.component.css']
})
export class ListMultasComponent implements OnInit {

  multas: IMulta[] = [];

  constructor(
    private multaService: MultaService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.mostrarMultas()
  }

  mostrarMultas() {
    this.multaService.getAllMultas()
      .subscribe({
        next: (data) => {
          this.multas = data.multa
          console.log(this.multas)
        }
      })
  }

  // llenarMultas() {
  //   this.multas = [
  //     {
  //       dni: 123456789,
  //       consecutivoMultas: "ABC123",
  //       fechayhora: "2023-09-11 14:30",
  //       lugarInfraccion: "Medellín, Calle Principal"
  //     },
  //     {
  //       dni: 987654321,
  //       consecutivoMultas: "XYZ789",
  //       fechayhora: "2023-09-12 09:15",
  //       lugarInfraccion: "Bogotá, Avenida Central"
  //     },
  //     {
  //       dni: 555555555,
  //       consecutivoMultas: "LMN456",
  //       fechayhora: "2023-09-10 16:45",
  //       lugarInfraccion: "Cali, Carrera 7"
  //     }
  //   ]
  // }

}
