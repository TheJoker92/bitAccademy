import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * PRIMENG MODULES
 */
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DialogModule } from 'primeng/dialog';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ButtonOptionsComponent } from './componens/button-options/button-options.component';
import { LangPipe } from './utils/pipes/lang.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopnavComponent,
    ButtonOptionsComponent,
    LangPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SlideMenuModule,
    DialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
