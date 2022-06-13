import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProviderComponent } from './card-provider.component';

describe('CardProviderComponent', () => {
  let component: CardProviderComponent;
  let fixture: ComponentFixture<CardProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
