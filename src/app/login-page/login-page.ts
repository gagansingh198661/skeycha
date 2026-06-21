import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TermsOfService } from '../terms-of-service/terms-of-service';

@Component({
  selector: 'app-login-page',
  imports: [MatIcon,TermsOfService],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  showModal = false;
  openTermsOfService():void{
    this.showModal = true;

  }

}
