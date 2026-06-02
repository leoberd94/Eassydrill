import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Contacto } from '../contacto/contacto';

import { Gallery } from '../gallery/gallery';
import { filter } from 'rxjs';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, RouterLink, Contacto, NgOptimizedImage, Gallery],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
    

   isPage = false;
  private router = inject(Router);

  constructor() {
    // Detecta la ruta actual y futuros cambios
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isPage = e.urlAfterRedirects === '/servicios';
    });

    // También verifica la URL actual al inicio
    this.isPage = this.router.url === '/servicios';
  }

  services = [
    {
      number: '01',
      icon: 'ti-bulldozer',
      title: 'Directional Boring',
      description: 'Professional underground directional drilling solutions for utilities, telecommunications, and infrastructure projects with minimal surface disruption.',
      image: '/img1.jpeg',
      reverse: false
    },
    {
      number: '02',
      icon: 'ti-wave-sine',
      title: 'Fiber Optic Cable Pulling',
      description: 'Safe and efficient fiber optic cable installation for residential, commercial, and municipal networks.',
      image: '/img2.jpeg',
      reverse: true
    }

    /*{
      number: '03',
      icon: 'ti-plug',
      title: 'Underground Utility Installation',
      description: 'Reliable underground pathways for communication and utility systems while protecting surrounding structures and landscapes.',
      image: '/assets/images/service3.jpg',
      reverse:false
    },
    {
      number: '04',
      icon: 'ti-clipboard-list',
      title: 'Project Support & Coordination',
      description: 'We work closely with contractors, developers, and utility companies to ensure every project is completed on schedule and according to specifications.',
      image: '/assets/images/service4.jpg',
      reverse: true
    },*/
     
  ];

}
