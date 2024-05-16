import { Component, Inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  template: ``,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  constructor(@Inject(Router) private router: Router) {}

  goToHome() {
    console.log('home button clicked');
    this.router.navigate(['/']); // Navigate to the home page
  }

  goToAbout() {
    console.log('about button clicked');
    this.router.navigate(['/about']); // Navigate to the about us page
  }
}
