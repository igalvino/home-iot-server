import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServersComponent } from "./servers/servers.component";
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/servers', component: ServersComponent },
  {path: '**', redirectTo: 'dashboard/servers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
