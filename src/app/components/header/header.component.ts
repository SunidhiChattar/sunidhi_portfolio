import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  resumeUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustUrl('/assets/Sunidhi_Resume.pdf');
  }

   scrollTo(section: string) {
    if (this.router.url === '/' || this.router.url === '') {
      this.scrollNow(section);
      return;
    }

    // navigate to home, then scroll after navigation completes
    this.router.navigate(['/']).then(() => {
      // small timeout to ensure DOM is rendered; 0-100ms is usually fine
      setTimeout(() => this.scrollNow(section), 50);
    });
  }

  private scrollNow(section: string) {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
