import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitHeaderComponent } from './hit-header.component';
import { provideRouter } from '@angular/router';

describe('HitHeaderComponent', () => {
  let component: HitHeaderComponent;
  let fixture: ComponentFixture<HitHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitHeaderComponent],
      providers: [
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
