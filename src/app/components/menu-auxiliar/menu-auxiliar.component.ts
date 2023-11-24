import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-auxiliar',
  templateUrl: './menu-auxiliar.component.html',
  styleUrls: ['./menu-auxiliar.component.css']
})
export class MenuAuxiliarComponent implements OnInit {
  items: MenuItem[] = [];
  @Input() rutaDeseada: string = '';
  ngOnInit(): void {
    this.items = [
      {
        label: 'Añadir',
        icon: 'pi pi-fw pi-plus',
        routerLink: this.rutaDeseada + '/add',

      },
      {
        label: 'Modificar',
        icon: 'pi pi-fw pi-sync',
        routerLink: this.rutaDeseada + '/update'
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-fw pi-delete-left',
        routerLink: this.rutaDeseada + '/delete'
      }

    ]
  }

}
