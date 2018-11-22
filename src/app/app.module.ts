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
import { MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

// used to create fake backend
import { AuthGuard } from './_guards';
import { AuthenticationService, UserService } from './_services';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SideNavComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        ReactiveFormsModule,
        HttpClientModule,
        AnnotationsPlayerModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatMenuModule,
        MatDividerModule,
        RouterModule,
        MatSidenavModule,
        FlexLayoutModule
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
