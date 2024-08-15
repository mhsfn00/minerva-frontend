import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CallsPageComponent } from './pages/calls-page/calls-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'calls', component: CallsPageComponent },
    { path: 'clients', component: ClientsPageComponent },
];
