import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfessionalListComponent } from './professional/professional-list/professional-list.component';
import { ProfessionistListComponent } from './professionist/professionist-list/professionist-list.component';
import { ProfessionistEditComponent } from './professionist/professionist-edit/professionist-edit.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'professionist', component: ProfessionistListComponent},
  { path: 'professionist/add', component: ProfessionistEditComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
