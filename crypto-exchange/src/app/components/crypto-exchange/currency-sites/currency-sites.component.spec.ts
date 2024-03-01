import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySitesComponent } from './currency-sites.component';

describe('CurrencySitesComponent', () => {
  let component: CurrencySitesComponent;
  let fixture: ComponentFixture<CurrencySitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencySitesComponent]
    });
    fixture = TestBed.createComponent(CurrencySitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
