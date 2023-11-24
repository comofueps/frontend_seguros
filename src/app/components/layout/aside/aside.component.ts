import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Personas',
        icon: 'pi pi-fw pi-users',
        routerLink: '/personas'
      },
      {
        label: 'Documentos',
        icon: 'pi pi-fw pi-file',
        routerLink: '/documentos'
      },
      {
        label: 'Multas',
        icon: 'pi pi-fw pi-paperclip',
        routerLink: '/multas'
      },
      {
        label: 'Vehiculos',
        icon: 'pi pi-fw pi-car',
        routerLink: '/vehiculos'
      },
      {
        label: 'Involucrar',
        icon: 'pi pi-fw pi-sync',
        routerLink: '/involucrar'
      },
    ]
  }
}
