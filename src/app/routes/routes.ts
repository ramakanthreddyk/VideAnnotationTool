import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AnnotationsPlayerComponent } from '../Annotations-player/Annotations-player.component';
import { AuthGuard } from '../_guards';

export const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'player',
        component: AnnotationsPlayerComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
