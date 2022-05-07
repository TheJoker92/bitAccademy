import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export enum ENDPOINTS {
  LOGGED = "logged",
  LOGIN = "login",
  REGISTER = "register"
}

var currentRoute = ""

const routes: Routes = [
  { path: ENDPOINTS.LOGGED, component: LoginComponent },
  { path: ENDPOINTS.LOGIN, component: LoginComponent },
  { path: ENDPOINTS.REGISTER, component: RegisterComponent },
  { path: '**', redirectTo: ENDPOINTS.LOGIN, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
