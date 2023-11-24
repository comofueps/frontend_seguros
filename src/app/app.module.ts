import { NgModule } from '@angular/core';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ListPersonaComponent } from './components/personas/list-persona/list-persona.component';
import { AddPersonaComponent } from './components/personas/add-persona/add-persona.component';
import { DeletePersonaComponent } from './components/personas/delete-persona/delete-persona.component';
import { UpdatePersonaComponent } from './components/personas/update-persona/update-persona.component';
import { ListDocumentoComponent } from './components/documentos/list-documento/list-documento.component';
import { AddDocumentoComponent } from './components/documentos/add-documento/add-documento.component';
import { DeleteDocumentoComponent } from './components/documentos/delete-documento/delete-documento.component';
import { UpdateDocumentoComponent } from './components/documentos/update-documento/update-documento.component';
import { ListVehiculoComponent } from './components/vehiculos/list-vehiculo/list-vehiculo.component';
import { AddVehiculoComponent } from './components/vehiculos/add-vehiculo/add-vehiculo.component';
import { DeleteVehiculoComponent } from './components/vehiculos/delete-vehiculo/delete-vehiculo.component';
import { UpdateVehiculoComponent } from './components/vehiculos/update-vehiculo/update-vehiculo.component';
import { ListInvolucrarComponent } from './components/involucrar/list-involucrar/list-involucrar.component';
import { AddInvolucrarComponent } from './components/involucrar/add-involucrar/add-involucrar.component';
import { UpdateInvolucrarComponent } from './components/involucrar/update-involucrar/update-involucrar.component';
import { DeleteInvolucrarComponent } from './components/involucrar/delete-involucrar/delete-involucrar.component';
import { ListMultasComponent } from './components/multas/list-multas/list-multas.component';
import { AddMultasComponent } from './components/multas/add-multas/add-multas.component';
import { DeleteMultasComponent } from './components/multas/delete-multas/delete-multas.component';
import { UpdateMultasComponent } from './components/multas/update-multas/update-multas.component';
import { MenuAuxiliarComponent } from './components/menu-auxiliar/menu-auxiliar.component';


// Modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    FooterComponent,
    ListPersonaComponent,
    AddPersonaComponent,
    DeletePersonaComponent,
    UpdatePersonaComponent,
    ListDocumentoComponent,
    AddDocumentoComponent,
    DeleteDocumentoComponent,
    UpdateDocumentoComponent,
    ListVehiculoComponent,
    AddVehiculoComponent,
    DeleteVehiculoComponent,
    UpdateVehiculoComponent,
    ListInvolucrarComponent,
    AddInvolucrarComponent,
    UpdateInvolucrarComponent,
    DeleteInvolucrarComponent,
    ListMultasComponent,
    AddMultasComponent,
    DeleteMultasComponent,
    UpdateMultasComponent,
    MenuAuxiliarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TableModule,
    MenubarModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
