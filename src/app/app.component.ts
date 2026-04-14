import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // ✅ added router support
import Aos from 'aos';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet // ✅ added here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
 private lastUrl: string = '/';
   constructor(private router: Router) {}
  ngOnInit() {
    Aos.init({
      duration: 800, // animation speed in ms
      once: true, // only animate once
      easing: 'ease-in-out'
    });
  
  // ✅ Track route changes
    this.router.events.subscribe(() => {
      this.lastUrl = this.router.url;
    });
  }
  /** 
   * 🧭 Handle browser back button globally
   */
  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    const currentUrl = this.router.url;

    // Case 1: If currently on project details page, go back to home
    if (currentUrl.startsWith('/project/')) {
      this.router.navigate(['/']);
      return;
    }
  }

  /** 
   * 📜 Smooth scroll to specific element by ID
   */
  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If not on home page, navigate home first then scroll?
      // Since it's a SPA with sections usually on home page:
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      });
    }
  }
}
