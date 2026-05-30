import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-etiquetas',
  imports: [CommonModule, RouterLink],
  templateUrl: './etiquetas.html',
  styleUrl: './etiquetas.css',
})
export class Etiquetas {
   reasons = [
    {
      icon: 'ti ti-clock',
      title: 'On-Time Delivery',
      description: 'We respect deadlines and understand the importance of keeping projects moving without delays.'
    },
    {
      icon: 'ti ti-shield-check',
      title: 'Commitment & Reliability',
      description: 'Every project is handled with professionalism, responsibility, and clear communication.'
    },
    {
      icon: 'ti ti-home',
      title: 'Damage Prevention Focus',
      description: 'We take extra care to avoid unnecessary damage to properties, utilities, landscaping, and surrounding areas.'
    },
    {
      icon: 'ti ti-tool',
      title: 'Clean & Organized Worksites',
      description: 'We believe a professional job includes leaving the site clean, organized, and ready after the work is completed.'
    },
    {
      icon: 'ti ti-users',
      title: 'Experienced Team',
      description: 'Our crew is trained to perform efficient and precise underground drilling and fiber optic installations.'
    },
    {
      icon: 'ti ti-alert-triangle',
      title: 'Safety First',
      description: 'We follow safe operational practices to protect both the project and the environment.'
    }
  ];
}

