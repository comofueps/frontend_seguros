import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IVehiculo } from 'src/app/models/teambea_vehiculos';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.css']
})
export class AddVehiculoComponent {
  public form: FormGroup = this.formBuilder.group({
    matricula: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private personaService: VehiculoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: IVehiculo = this.form.value;
    console.log(formValue);
    this.personaService.createVehiculo(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');
        this.router.navigateByUrl('/personas');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/personas');
  }

  get matricula() { return this.form.get('matricula'); }
  get marca() { return this.form.get('marca'); }
  get modelo() { return this.form.get('modelo'); }

}
