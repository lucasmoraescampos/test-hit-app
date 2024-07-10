import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HitService } from '../shared/services/hit.service';
import { Observable, of } from 'rxjs';
import { HitResponseData } from '../shared/models/hit-response';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let hitServiceStub: Partial<HitService>;

  beforeEach(waitForAsync(() => {
    hitServiceStub = {
      get: () => of({
        title: 'Teste Hit. Boa sorte!',
        text: 'Estamos felizes em anunciar que você está participando do processo seletivo para a nossa vaga de programador.'
      })
    };

    TestBed.configureTestingModule({
      imports: [ HomeComponent ],
      providers: [
        { provide: HitService, useValue: hitServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch introData from service', () => {
    expect(component.introData$).toBeDefined();

    component.introData$.subscribe(data => {
      expect(data).toBeTruthy();
    });
  });
});
