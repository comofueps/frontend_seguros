import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IInvolucrar } from 'src/app/models/teambea_involucrar';
import { InvolucrarService } from 'src/app/services/involucrar.service';

@Component({
  selector: 'app-add-involucrar',
  templateUrl: './add-involucrar.component.html',
  styleUrls: ['./add-involucrar.component.css']
})
export class AddInvolucrarComponent {
  public form: FormGroup = this.formBuilder.group({
    hora: ['', [Validators.required]],
    VehiculoId: ['', [Validators.required]],
    PersonaId: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private involucrarService: InvolucrarService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: IInvolucrar = this.form.value;
    console.log(formValue);
    this.involucrarService.createInvolucrar(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');
        this.router.navigateByUrl('/involucrar');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/involucrar');
  }

  get hora() { return this.form.get('hora'); }
  get VehiculoId() { return this.form.get('VehiculoId'); }
  get PersonaId() { return this.form.get('PersonaId'); }
}
