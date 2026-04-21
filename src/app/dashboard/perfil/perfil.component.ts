import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CvDataService } from '../../cv-data.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  protected readonly perfil$ = inject(CvDataService).getPerfil();
}
