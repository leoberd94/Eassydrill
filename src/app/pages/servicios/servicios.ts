import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Contacto} from '../contacto/contacto';
import { reverse } from 'dns';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, RouterLink, Contacto],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  isPage: boolean;

  constructor(private router: Router) {
    this.isPage = this.router.url === '/servicios';
  }

   services = [
    {
      number: '01',
      icon: 'ti-drill',
      title: 'Directional Boring',
      description: 'Professional underground directional drilling solutions for utilities, telecommunications, and infrastructure projects with minimal surface disruption.',
      image: 'assets/images/service1.jpg'
    },
    {
      number: '02',
      icon: 'ti-wave-sine',
      title: 'Fiber Optic Cable Pulling',
      description: 'Safe and efficient fiber optic cable installation for residential, commercial, and municipal networks.',
      image: 'assets/images/service2.jpg',
      reverse: true
    },
    {
      number: '03',
      icon: 'ti-plug',
      title: 'Underground Utility Installation',
      description: 'Reliable underground pathways for communication and utility systems while protecting surrounding structures and landscapes.',
      image: 'assets/images/service3.jpg'
    },
    {
      number: '04',
      icon: 'ti-clipboard-list',
      title: 'Project Support & Coordination',
      description: 'We work closely with contractors, developers, and utility companies to ensure every project is completed on schedule and according to specifications.',
      image: 'assets/images/service4.jpg',
      reverse: true
    },
   
  ];

}
