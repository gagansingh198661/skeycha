import { Component, signal } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Catalog } from './catalog/catalog';
import { Footer } from './footer/footer';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { LoginPage } from './login-page/login-page';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Menu,Catalog,Footer,PrivacyPolicy,LoginPage,FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showAdmin: boolean = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, router:Router) {
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
    router.events.forEach((event) => {
    if(event instanceof NavigationStart) {
        this.showAdmin = event.url !== "/admin";
    }
  });
  }
  protected readonly title = signal('skeycha');

  
}
