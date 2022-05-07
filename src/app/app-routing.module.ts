import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './pages/logged/logged.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export enum ENDPOINTS {
  LOGGED = "index",
  LOGGED_HOME = "home",
  LOGGED_PROJECTS = "projects",
  LOGGED_NEW_PROJECT = "new_project",
  LOGIN = "login",
  REGISTER = "register"
}

const routes: Routes = [
  { path: ENDPOINTS.LOGGED, component: LoggedComponent,
    children: [
      { path: ENDPOINTS.LOGGED_NEW_PROJECT, component: LoggedComponent },
      { path: ENDPOINTS.LOGGED_PROJECTS, component: LoggedComponent,
        children: [
          { path: ':id', component: LoggedComponent }
        ] },
    ]
  },
  { path: ENDPOINTS.LOGIN, component: LoginComponent },
  { path: ENDPOINTS.REGISTER, component: RegisterComponent },
  { path: '**', redirectTo: ENDPOINTS.LOGIN, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
