import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDocumento } from 'src/app/models/teambea_documentos';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-add-documento',
  templateUrl: './add-documento.component.html',
  styleUrls: ['./add-documento.component.css']
})
export class AddDocumentoComponent {
  public form: FormGroup = this.formBuilder.group({
    tarjetaPropiedad: ['', [Validators.required]],
    ciudadExp: ['', [Validators.required]],
    VehiculoId: ['', [Validators.required]],
    PersonaId: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private documentoService: DocumentoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: IDocumento = this.form.value;
    console.log(formValue);
    this.documentoService.createDocumento(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');
        this.router.navigateByUrl('/documentos');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/documentos');
  }

  get tarjetaPropiedad() { return this.form.get('tarjetaPropiedad'); }
  get ciudadExp() { return this.form.get('ciudadExp'); }
  get VehiculoId() { return this.form.get('VehiculoId'); }
  get PersonaId() { return this.form.get('PersonaId'); }

}
