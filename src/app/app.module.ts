import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfessionalListComponent } from './professional/professional-list/professional-list.component';
import { ProfessionistListComponent } from './professionist/professionist-list/professionist-list.component';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeRestService } from './fakeData/fake-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionistEditComponent } from './professionist/professionist-edit/professionist-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    //ProfessionalListComponent,
    ProfessionistListComponent,
    ProfessionistEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FakeRestService),  //Intercetta le chiamate http
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
