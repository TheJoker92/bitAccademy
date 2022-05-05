import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * PRIMENG MODULES
 */
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ButtonOptionsComponent } from './componens/button-options/button-options.component';
import { LangPipe } from './utils/pipes/lang.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ProjectNavComponent } from './project-nav/project-nav.component';
import { HttpService } from './services/http/http.service';
import { ErrorService } from './services/error/error.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopnavComponent,
    ButtonOptionsComponent,
    LangPipe,
    LoaderComponent,
    ProjectNavComponent
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
    HttpClientModule
  ],
  providers: [
    HttpService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
