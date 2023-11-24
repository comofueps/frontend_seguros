import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPersona } from 'src/app/models/teambea_personas';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  public personas: IPersona[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarPersonas()
  }
  mostrarPersonas() {
    this.personaService.getAllPersonas()
      .subscribe({
        next: (data) => {
          this.personas = data.persona
          console.log(this.personas)
        }
      })
  }

  // llenarPersona() {
  //   this.personas = [
  //     {
  //       dni: 123456789,
  //       nombre: "Juan Pérez",
  //       direccion: "Calle Principal 123",
  //       ciudad: "Medellín",
  //       tipoPersona: "Cliente",
  //       telefono: "555-123-456"
  //     },
  //     {
  //       dni: 987654321,
  //       nombre: "María González",
  //       direccion: "Avenida Central 456",
  //       ciudad: "Cali",
  //       tipoPersona: "Proveedor",
  //       telefono: "555-789-123"
  //     },
  //     {
  //       dni: 555555555,
  //       nombre: "Pedro Ramírez",
  //       direccion: "Carrera 7 No. 89-10",
  //       ciudad: "Cartagena",
  //       tipoPersona: "Empleado",
  //       telefono: "555-555-555"
  //     },



  //   ]
  // }

}
