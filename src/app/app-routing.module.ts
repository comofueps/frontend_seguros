import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonaComponent } from './components/personas/list-persona/list-persona.component';
import { ListDocumentoComponent } from './components/documentos/list-documento/list-documento.component';
import { ListVehiculoComponent } from './components/vehiculos/list-vehiculo/list-vehiculo.component';
import { ListInvolucrarComponent } from './components/involucrar/list-involucrar/list-involucrar.component';
import { ListMultasComponent } from './components/multas/list-multas/list-multas.component';
import { AddPersonaComponent } from './components/personas/add-persona/add-persona.component';
import { UpdatePersonaComponent } from './components/personas/update-persona/update-persona.component';
import { DeletePersonaComponent } from './components/personas/delete-persona/delete-persona.component';
import { AddDocumentoComponent } from './components/documentos/add-documento/add-documento.component';
import { UpdateDocumentoComponent } from './components/documentos/update-documento/update-documento.component';
import { DeleteDocumentoComponent } from './components/documentos/delete-documento/delete-documento.component';
import { AddMultasComponent } from './components/multas/add-multas/add-multas.component';
import { UpdateMultasComponent } from './components/multas/update-multas/update-multas.component';
import { DeleteMultasComponent } from './components/multas/delete-multas/delete-multas.component';
import { AddVehiculoComponent } from './components/vehiculos/add-vehiculo/add-vehiculo.component';
import { UpdateVehiculoComponent } from './components/vehiculos/update-vehiculo/update-vehiculo.component';
import { DeleteVehiculoComponent } from './components/vehiculos/delete-vehiculo/delete-vehiculo.component';
import { AddInvolucrarComponent } from './components/involucrar/add-involucrar/add-involucrar.component';
import { UpdateInvolucrarComponent } from './components/involucrar/update-involucrar/update-involucrar.component';
import { DeleteInvolucrarComponent } from './components/involucrar/delete-involucrar/delete-involucrar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: 'personas',
    component: ListPersonaComponent
  },
  {
    path: 'personas/add',
    component: AddPersonaComponent
  },
  {
    path: 'personas/update',
    component: UpdatePersonaComponent
  },
  {
    path: 'personas/delete',
    component: DeletePersonaComponent
  },


  {
    path: 'documentos',
    component: ListDocumentoComponent
  },
  {
    path: 'documentos/add',
    component: AddDocumentoComponent
  },
  {
    path: 'documentos/update',
    component: UpdateDocumentoComponent
  },
  {
    path: 'documentos/delete',
    component: DeleteDocumentoComponent
  },
  {
    path: 'vehiculos',
    component: ListVehiculoComponent
  },
  {
    path: 'vehiculos/add',
    component: AddVehiculoComponent
  },
  {
    path: 'vehiculos/update',
    component: UpdateVehiculoComponent
  },
  {
    path: 'vehiculos/delete',
    component: DeleteVehiculoComponent
  },

  {
    path: 'involucrar',
    component: ListInvolucrarComponent
  },

  {
    path: 'involucrar/add',
    component: AddInvolucrarComponent
  },

  {
    path: 'involucrar/update',
    component: UpdateInvolucrarComponent
  },

  {
    path: 'involucrar/delete',
    component: DeleteInvolucrarComponent
  },

  {
    path: 'multas',
    component: ListMultasComponent
  },
  {
    path: 'multas/add',
    component: AddMultasComponent
  },
  {
    path: 'multas/update',
    component: UpdateMultasComponent
  },
  {
    path: 'multas/delete',
    component: DeleteMultasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
