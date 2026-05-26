import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Etiquetas } from "../etiquetas/etiquetas";
import { Cleanup } from "../cleanup/cleanup";
import { About } from "../about/about";
import { Servicios } from "../servicios/servicios";
import { AboutBanner } from "../nosotros/components/about-banner/about-banner";

@Component({
  selector: 'app-home',
  imports: [Hero, Etiquetas, Cleanup, About, Servicios, AboutBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
