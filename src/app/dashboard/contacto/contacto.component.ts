import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CvDataService } from '../../cv-data.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatIconModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  protected readonly contacto$ = inject(CvDataService).getContacto();

  protected whatsappUrl(celular: string): string {
    const phone = '52' + celular.replaceAll(/\D/g, '');
    const text = encodeURIComponent(
      'Hola FJesus, vi tu CV y me gustaría contactarte para una oportunidad de colaboración.'
    );
    return `https://wa.me/${phone}?text=${text}`;
  }
}
