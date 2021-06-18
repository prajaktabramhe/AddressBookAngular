import { HomeComponent } from './components/home/home.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
