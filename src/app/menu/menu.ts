import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@angular/material/icon';
import {  RouterLink } from '@angular/router';
import { ModalService } from '../modal-service';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule,RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  openLoginModal = false;
  @Output() close = new EventEmitter<void>();
  constructor(private modalService:ModalService){

  }

  openLoginPage(){
    this.modalService.showLoginPage();
  }
  

}
