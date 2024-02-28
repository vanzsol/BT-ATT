import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CryptoExchangeComponent } from './components/crypto-exchange/crypto-exchange.component';
import { loggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'crypto-exchange',
    component: CryptoExchangeComponent,
    canActivate: [loggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
