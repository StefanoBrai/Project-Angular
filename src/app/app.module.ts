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
import { RequestCrudComponent } from './request/request-crud/request-crud.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestUpsertComponent } from './request/request-upsert/request-upsert.component';
import { CandidatureListComponent } from './candidature/candidature-list/candidature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfessionistCrudComponent,
    ProfessionistListComponent,
    ProfessionistUpsertComponent,
    RequestCrudComponent,
    RequestListComponent,
    RequestUpsertComponent,
    CandidatureListComponent
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
