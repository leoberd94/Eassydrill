import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
pillars = [
    {
      title: 'Punctual project delivery',
      desc: 'We respect deadlines and understand the importance of keeping projects moving without delays.'
    },
    {
      title: 'Professional communication',
      desc: 'Every project is handled with professionalism, responsibility, and clear communication.'
    },
    {
      title: 'Attention to detail',
      desc: 'We take extra care to avoid unnecessary damage to properties, utilities, and surrounding areas.'
    },
    {
      title: 'Safe and damage-free operations',
      desc: 'We keep the client informed at every stage of the process, ensuring total transparency.'
    },
    {
      title: 'Clean job sites after project completion',
      desc: 'After completing each project, we leave the area organized and restored, with an impeccable finish.'
    },
    {
      title: 'Commitment to customer satisfaction',
      desc: 'Our job isn\'t done until the client is completely satisfied with the result.'
    }
  ];
}

