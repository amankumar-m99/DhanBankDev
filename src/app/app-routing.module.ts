import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PinChangeComponent } from './pin-change/pin-change.component';
import { BalanceComponent } from './balance/balance.component';
import { MenuPlaceholderComponent } from './menu-placeholder/menu-placeholder.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'login', component:LoginComponent},
  {path:'withdraw', component:WithdrawComponent},
  {path:'transfer', component:TransferComponent},
  {path:'pin-change', component:PinChangeComponent},
  {path:'balance', component:BalanceComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
