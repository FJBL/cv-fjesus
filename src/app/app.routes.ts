import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'perfil', pathMatch: 'full' },
	{ path: 'perfil', loadComponent: () => import('./dashboard/perfil/perfil.component').then(m => m.PerfilComponent) },
	{ path: 'experiencia', loadComponent: () => import('./dashboard/experiencia/experiencia.component').then(m => m.ExperienciaComponent) },
	{ path: 'habilidades', loadComponent: () => import('./dashboard/habilidades/habilidades.component').then(m => m.HabilidadesComponent) },
	{ path: 'contacto', loadComponent: () => import('./dashboard/contacto/contacto.component').then(m => m.ContactoComponent) },
];
