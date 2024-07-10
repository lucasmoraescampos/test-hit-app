import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HitHeaderComponent } from './shared/components/hit-header/hit-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HitHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
