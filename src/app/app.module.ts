import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**
 * PRIMENG MODULES
 */
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenubarModule } from 'primeng/menubar';
import { ListboxModule } from 'primeng/listbox';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ButtonOptionsComponent } from './components/button-options/button-options.component';
import { LangPipe } from './utils/pipes/lang.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ProjectNavComponent } from './project-nav/project-nav.component';
import { HttpService } from './services/http/http.service';
import { ErrorService } from './services/error/error.service';
import { LoginComponent } from './pages/login/login.component';
import { LoggedComponent } from './pages/logged/logged.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewProjectComponent } from './pages/logged/new-project/new-project.component';
import { ProjectsComponent } from './pages/logged/projects/projects.component';
import { UploadedFileComponent } from './components/uploaded-file/uploaded-file.component';
import { AddedTeamMemberComponent } from './components/added-team-member/added-team-member.component';
import { AddedLinkComponent } from './components/added-link/added-link.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopnavComponent,
    ButtonOptionsComponent,
    LangPipe,
    LoaderComponent,
    ProjectNavComponent,
    LoginComponent,
    LoggedComponent,
    RegisterComponent,
    NewProjectComponent,
    ProjectsComponent,
    UploadedFileComponent,
    AddedTeamMemberComponent,
    AddedLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SlideMenuModule,
    DialogModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    HttpClientModule,
    MenubarModule,
    ListboxModule,
    FormsModule
  ],
  providers: [
    HttpService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
