import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfessionalListComponent } from './professional/professional-list/professional-list.component';
import { ProfessionistListComponent } from './professionist/professionist-list/professionist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    //ProfessionalListComponent,
    ProfessionistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
