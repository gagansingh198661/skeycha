import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [NgIf],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {
  @Input() showPrivacyPolicy = false;                // controls visibility
  @Output() close = new EventEmitter<void>();
  onClose() {
    this.close.emit();
  }

  openPrivacyPolicy():void{
    this.showPrivacyPolicy = true;
  }
}
