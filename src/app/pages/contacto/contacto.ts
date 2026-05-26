import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  @Input() showHeader = true;

  phone = '+1 (555) 123-4567'; // example phone
  email = 'info@easydrillsolutions.com'; // example email

  services = [
    'Directional Boring',
    'Fiber Optic Cable Pulling',
    'Underground Utility Installation',
    'Project Support & Coordination',
    'Other'
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    // Logic for submitting the form will go here
    console.log('Form submission intercepted');
  }
}
