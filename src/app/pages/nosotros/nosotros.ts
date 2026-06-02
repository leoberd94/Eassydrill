import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About } from '../about/about';
import { Cleanup } from '../cleanup/cleanup';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, About, Cleanup,],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  mission = 'To deliver high-quality underground directional boring and fiber optic installation services with precision, integrity, and commitment while maintaining safe operations and customer satisfaction.';
  vision = 'To become a trusted leader in underground utility solutions by consistently delivering reliable, efficient, and damage-free projects.';
}
