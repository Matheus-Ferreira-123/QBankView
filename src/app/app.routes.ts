import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{ path: 'login', component: LoginComponent },
                               { path: 'clients', component: ClientsComponent},
                                {path: 'home', component: HomeComponent}];
