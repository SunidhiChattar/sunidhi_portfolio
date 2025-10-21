import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ import this

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submit() {
    const subject = `Message from ${this.name}`;

    const body = `Dear Sunidhi,

${this.message}

Thanks & Regards,
${this.name}
(${this.email})`;

    const mailto = `mailto:its.sunidhi.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    // Reset form fields
    this.name = this.email = this.message = '';
  }


}
