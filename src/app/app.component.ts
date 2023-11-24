import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appseguros';
  mostrarContenido: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

    // Suscripción al evento NavigationEnd
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects; // Obtener la ruta actual
        if (currentRoute == '/') {
          this.mostrarContenido = true;
        } else {
          this.mostrarContenido = false;
        }
      }
    });

  }
}
