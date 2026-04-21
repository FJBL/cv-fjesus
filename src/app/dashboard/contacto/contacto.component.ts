import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CvDataService } from '../../cv-data.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  protected readonly contacto$ = inject(CvDataService).getContacto();
}
