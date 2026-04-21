import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CvDataService } from '../../cv-data.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  protected readonly habilidades$ = inject(CvDataService).getHabilidades();
}
