import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CallsPageComponent } from './pages/calls-page/calls-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { RegistrationsPageComponent } from './pages/registrations-page/registrations-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'calls', component: CallsPageComponent },
    { path: 'clients', component: ClientsPageComponent },
    { path: 'registrations', component: RegistrationsPageComponent },
    { path: 'schedule', component: SchedulePageComponent },
    { path: 'settings', component: SettingsPageComponent },
];