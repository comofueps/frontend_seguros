import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPersona } from 'src/app/models/teambea_personas';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent {
  public form: FormGroup = this.formBuilder.group({
    DNI: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    tipoPersona: ['', [Validators.required]],
    telefono: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: IPersona = this.form.value;
    console.log(formValue);
    this.personaService.createPersona(formValue).subscribe(
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

  get DNI() { return this.form.get('DNI'); }
  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get direccion() { return this.form.get('direccion'); }
  get ciudad() { return this.form.get('ciudad'); }
  get tipoPersona() { return this.form.get('tipoPersona'); }
  get telefono() { return this.form.get('telefono'); }


}




