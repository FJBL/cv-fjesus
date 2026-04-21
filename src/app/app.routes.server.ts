import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '',           renderMode: RenderMode.Prerender },
  { path: 'perfil',      renderMode: RenderMode.Prerender },
  { path: 'experiencia', renderMode: RenderMode.Prerender },
  { path: 'habilidades', renderMode: RenderMode.Prerender },
  { path: 'contacto',    renderMode: RenderMode.Prerender },
  { path: '**',          renderMode: RenderMode.Prerender },
];
