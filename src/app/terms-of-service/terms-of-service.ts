import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  imports: [NgIf],
  templateUrl: './terms-of-service.html',
  styleUrl: './terms-of-service.css',
})
export class TermsOfService {

@Input() showTermsOfService = false;
@Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
