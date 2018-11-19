import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { AnnotationsPlayerModule } from './Annotations-player/Annotations-player.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// used to create fake backend
import { AuthGuard } from './_guards';
import { AuthenticationService, UserService } from './_services';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        ReactiveFormsModule,
        HttpClientModule,
        AnnotationsPlayerModule,
        BrowserAnimationsModule,
        MatSnackBarModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
