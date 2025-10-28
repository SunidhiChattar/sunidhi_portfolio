import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FormsModule } from '@angular/forms'; // ✅ import this

@Component({
  selector: 'app-contact',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  constructor(private http: HttpClient) { }
  submit() {
    const payload = {
      "name": this.name,
      "email": this.email,
      "message": this.message
    }

    //     const subject = `Message from ${this.name}`;

    //     const body = `Dear Sunidhi,

    // ${this.message}

    // Thanks & Regards,
    // ${this.name}
    // (${this.email})`;

    // const mailto = `mailto:its.sunidhi.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // window.location.href = mailto;
    this.http.post('http://172.16.6.242:8080/portfolio/send-email', payload).subscribe(
      (response: any) => {
        if (response.status === 'SUCCESS') {
          Notiflix.Notify.success(response.statusDescription ?? 'Email sent successfully!');
        }
      },
      (error: any) => {
        Notiflix.Notify.failure(error.statusDescription ?? 'Failed to send email. Please try again later.');
      }
    )
    // Reset form fields
    this.name = this.email = this.message = '';
  }


}
