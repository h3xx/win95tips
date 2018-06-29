import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipofthedayComponent } from './tipoftheday.component';

describe('TipofthedayComponent', () => {
  let component: TipofthedayComponent;
  let fixture: ComponentFixture<TipofthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipofthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
