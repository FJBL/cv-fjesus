import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MenuItem } from './models/cv-data.models';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  private readonly defaultMenu: MenuItem[] = [
    { label: 'Perfil',      path: '/perfil',      icon: 'person' },
    { label: 'Experiencia', path: '/experiencia', icon: 'work'   },
    { label: 'Habilidades', path: '/habilidades', icon: 'build'  },
    { label: 'Contacto',    path: '/contacto',    icon: 'mail'   },
  ];

  menu: MenuItem[] = [...this.defaultMenu];
  readonly currentYear = new Date().getFullYear();

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<MenuItem[]>('/menu.json').subscribe({
        next: (data) => {
          this.menu = data.map((m, i) => ({ ...this.defaultMenu[i], ...m }));
        },
        error: () => {
          this.menu = [...this.defaultMenu];
        },
      });
    }

    // Handle URL fragments that map to known top-level routes.
    // The router's anchorScrolling handles scrolling to in-page elements.
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const fragment = this.router.parseUrl(this.router.url).fragment;
      if (!fragment) return;

      const knownRoutes = this.menu.map((m) => m.path.replace(/^\//, ''));
      if (knownRoutes.includes(fragment) && this.router.url.split('#')[0] !== '/' + fragment) {
        this.router.navigateByUrl('/' + fragment);
      }
    });
  }
}
