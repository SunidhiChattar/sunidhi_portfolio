import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  resumeUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustUrl('/assets/Sunidhi_Resume.pdf');
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
}
