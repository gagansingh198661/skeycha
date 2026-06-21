import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PrivacyPolicy } from '../privacy-policy/privacy-policy';
@Component({
  selector: 'app-footer',
  imports: [MatIcon, RouterLink,PrivacyPolicy],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  showPrivacyPolicyModal = false;
}
