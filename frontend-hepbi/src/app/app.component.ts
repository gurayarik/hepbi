import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-hepbi';
  year = new Date().getFullYear();

  /** İletişim e-postası — gerçek adresinizle değiştirin. */
  contactEmail = 'info@hepbi.com';

  /** İlerleme çubuğunda gösterilen yüzde (0–100). */
  progress = 80;
}
