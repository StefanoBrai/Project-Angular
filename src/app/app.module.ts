import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfessionistCrudComponent } from './professionist/professionist-crud/professionist-crud.component';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeRestService } from './fakeData/fake-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessionistListComponent } from './professionist/professionist-list/professionist-list.component';
import { ProfessionistUpsertComponent } from './professionist/professionist-upsert/professionist-upsert.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    //ProfessionalListComponent,
    ProfessionistCrudComponent,
    ProfessionistListComponent,
    ProfessionistUpsertComponent
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
