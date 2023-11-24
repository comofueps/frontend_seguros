import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMulta } from 'src/app/models/teambea_multas';
import { MultaService } from 'src/app/services/multas.service';

@Component({
  selector: 'app-add-multas',
  templateUrl: './add-multas.component.html',
  styleUrls: ['./add-multas.component.css']
})
export class AddMultasComponent {
  public form: FormGroup = this.formBuilder.group({
    consecutivoMultas: ['', [Validators.required]],
    PersonaID: ['', [Validators.required]],
    fechayHora: ['', [Validators.required]],
    lugarInfraccion: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private multaService: MultaService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: IMulta = this.form.value;
    console.log(formValue);
    this.multaService.createMulta(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');
        this.router.navigateByUrl('/multas');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/multas');
  }
  get consecutivoMultas() { return this.form.get('consecutivoMultas'); }
  get fechayHora() { return this.form.get('fechayHora'); }
  get lugarInfraccion() { return this.form.get('lugarInfraccion'); }
  get PersonaID() { return this.form.get('PersonaID'); }
}
