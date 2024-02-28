import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoExchangeComponent } from './crypto-exchange.component';

describe('CryptoExchangeComponent', () => {
  let component: CryptoExchangeComponent;
  let fixture: ComponentFixture<CryptoExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoExchangeComponent]
    });
    fixture = TestBed.createComponent(CryptoExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
