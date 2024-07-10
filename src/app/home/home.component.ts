import { Component } from '@angular/core';
import { HintTitleComponent } from '../shared/components/hint-title/hint-title.component';
import { HitService } from '../shared/services/hit.service';
import { Observable } from 'rxjs';
import { HitResponseData } from '../shared/models/hit-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HintTitleComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  introData$: Observable<HitResponseData> = this.service.get();

  constructor(
    private service: HitService
  ) {}
}
