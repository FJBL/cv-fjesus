import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import {
  CvData,
  PerfilData,
  ExperienciaData,
  HabilidadesData,
  ContactoData,
} from './models/cv-data.models';

export type {
  CvData,
  PerfilData,
  ExperienciaData,
  HabilidadesData,
  ContactoData,
  Metric,
  Stat,
  Block,
  Highlight,
  Job,
  SkillCategory,
} from './models/cv-data.models';

@Injectable({ providedIn: 'root' })
export class CvDataService {
  private readonly http = inject(HttpClient);
  private readonly data$ = this.http
    .get<CvData>('/cv-data.json')
    .pipe(shareReplay(1));

  getPerfil(): Observable<PerfilData> {
    return this.data$.pipe(map(d => d.perfil), catchError(() => EMPTY));
  }

  getExperiencia(): Observable<ExperienciaData> {
    return this.data$.pipe(map(d => d.experiencia), catchError(() => EMPTY));
  }

  getHabilidades(): Observable<HabilidadesData> {
    return this.data$.pipe(map(d => d.habilidades), catchError(() => EMPTY));
  }

  getContacto(): Observable<ContactoData> {
    return this.data$.pipe(map(d => d.contacto), catchError(() => EMPTY));
  }
}
