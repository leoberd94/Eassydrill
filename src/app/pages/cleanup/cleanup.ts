import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cleanup',
  imports: [CommonModule, RouterLink],
  templateUrl: './cleanup.html',
  styleUrl: './cleanup.css',
})
export class Cleanup {
  items = [
    {
      icon: 'ti ti-layout-collage',
      title: 'Organized work area',
      desc: 'We collect all materials and equipment used, leaving the space exactly as we found it.'
    },
    {
      icon: 'ti ti-sparkles',
      title: 'Residue-free',
      desc: 'We remove debris, excess soil, and any waste generated during the operation.'
    },
    {
      icon: 'ti ti-circle-check',
      title: 'Professional finish',
      desc: 'We restore affected surfaces to guarantee a pristine presentation to the client.'
    }
  ];
}