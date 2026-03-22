import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Catalog } from './catalog/catalog';
import { Footer } from './footer/footer';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Menu,Catalog,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
  }
  protected readonly title = signal('sonam');
}
