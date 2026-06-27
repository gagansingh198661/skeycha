import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TermsOfService } from '../terms-of-service/terms-of-service';
import { NgIf } from '@angular/common';
import { Menu } from '../menu/menu';
import { ModalService } from '../modal-service';

@Component({
  selector: 'app-login-page',
  imports: [MatIcon,TermsOfService,NgIf],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  openLogin = false;
  @Output() close = new EventEmitter<void>();

  constructor(private modalService:ModalService){
    effect(() => {
      console.log('running');
      // We just have to use the source signals 
      // somewhere inside this effect
      this.openLogin = this.modalService.showLogin();
    });
  }
  openTermsOfService():void{
    //this.showLoginPage = true;
  }
  onClose() {
    this.close.emit();
  }
  
  ngOnInit(): void {
    // Initialization tasks go here
    this.openLogin = this.modalService.showLogin();
  }

}


