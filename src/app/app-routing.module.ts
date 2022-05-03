import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'help', component: HelpComponent},
  // {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AuthComponent, DashboardComponent, HelpComponent]