import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   currentYear = new Date().getFullYear();

  social = {
    instagram: 'https://instagram.com/easydrillsolutions',
    facebook: 'https://www.facebook.com/people/EasyDrill-Solutions/61590301087941/'
  };

  email = 'Admin@easydrillsolutions.com';
  phone = '+12393830394';
  phoneDisplay = '+1 (239) 383-0394';

}
