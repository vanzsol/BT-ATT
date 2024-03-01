import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CryptoExchangeComponent } from './components/crypto-exchange/crypto-exchange.component';
import { loggedInGuard } from './guards/logged-in.guard';
import { CurrencySitesComponent } from './components/crypto-exchange/currency-sites/currency-sites.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'crypto-exchange',
    component: CryptoExchangeComponent,
    canActivate: [loggedInGuard],
  },
  { path: 'currencies', component: CurrencySitesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
