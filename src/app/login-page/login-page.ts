import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TermsOfService } from '../terms-of-service/terms-of-service';
import { NgIf } from '@angular/common';
import { Menu } from '../menu/menu';
import { ModalService } from '../modal-service';
import { LoginService } from '../services/login-service';
import {FormControl, FormGroup, NgForm, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [MatIcon,TermsOfService,NgIf,ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  openLogin = false;
  @Output() close = new EventEmitter<void>();

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private modalService:ModalService,private loginService:LoginService){
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
    this.modalService.closeLoginPage();
  }
  
  ngOnInit(): void {
    // Initialization tasks go here
    
  }

  login(){
    console.log('in login page');
    if(this.profileForm.value.firstName!=null && this.profileForm.value.password!=null){
      this.loginService.loginUser(this.profileForm.value.firstName, this.profileForm.value.password);
    }else{
      console.log('username or password is null');
    }

  }

}


