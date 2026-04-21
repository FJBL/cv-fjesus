import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('cv-fjesus');

  private readonly defaultMenu: Array<{ label: string; path: string; icon: string }> = [
    { label: 'Perfil',      path: '/perfil',      icon: 'person' },
    { label: 'Experiencia', path: '/experiencia', icon: 'work'   },
    { label: 'Habilidades', path: '/habilidades', icon: 'build'  },
    { label: 'Contacto',    path: '/contacto',    icon: 'mail'   },
  ];

  menu: Array<{ label: string; path: string; icon?: string }> = [...this.defaultMenu];

  constructor(private readonly router: Router, @Inject(PLATFORM_ID) private readonly platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      fetch('/menu.json')
        .then((res) => res.json())
        .then((data) => {
          this.menu = data.map((m: any, i: number) => ({
            ...this.defaultMenu[i],
            ...m,
          }));
        })
        .catch(() => {
          this.menu = [...this.defaultMenu];
        });
    }

    // Handle URL fragments that point to sections possibly in other routes.
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      const fragment = tree.fragment;
      if (!fragment) return;

      // If element with id exists in current document, scroll to it.
      const el = document.getElementById(fragment);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        return;
      }

      // If not found, and fragment matches a known top-level route, navigate there.
      const knownRoutes = this.menu.map((m) => m.path.replace(/^\//, ''));
      if (knownRoutes.includes(fragment) && this.router.url.split('#')[0] !== '/' + fragment) {
        this.router.navigateByUrl('/' + fragment).then(() => {
          setTimeout(() => document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        });
      }
    });
  }
}
