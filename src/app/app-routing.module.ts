import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfessionistCrudComponent } from './professionist/professionist-crud/professionist-crud.component';
import { RequestCrudComponent } from './request/request-crud/request-crud.component';
import { ProfessionistDetailsComponent } from './professionist/professionist-details/professionist-details.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'professionist', component: ProfessionistCrudComponent},
  { path: 'professionist/:id', component: ProfessionistDetailsComponent },
  { path: 'request', component: RequestCrudComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
