import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintTitleComponent } from './hint-title.component';

describe('HintTitleComponent', () => {
  let component: HintTitleComponent;
  let fixture: ComponentFixture<HintTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
