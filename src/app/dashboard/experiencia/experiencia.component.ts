import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { CvDataService } from '../../cv-data.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatCardModule, MatIconModule, MatExpansionModule, MatDividerModule],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  protected readonly experiencia$ = inject(CvDataService).getExperiencia();
}
