import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showLogin = signal(false);

  showLoginPage(){
    this.showLogin.set(true);
  }

  closeLoginPage(){
    this.showLogin.set(false);
  }
  

  
}
