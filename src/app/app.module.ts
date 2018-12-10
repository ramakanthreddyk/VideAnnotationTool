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
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import {OverlayModule} from '@angular/cdk/overlay';



// used to create fake backend
import { AuthGuard } from './_guards';
import { AuthenticationService, UserService } from './_services';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { AssetsComponent } from './assets/assets.component';
import { EditAnnotationComponent } from './edit-annotation/edit-annotation.component';
import { AnnotationOverlayComponent, RotiniPanel } from './annotation-overlay/annotation-overlay.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SidebarComponent,
        UsersComponent,
        AssetsComponent,
        EditAnnotationComponent,
        AnnotationOverlayComponent,
        RotiniPanel
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        ReactiveFormsModule,
        HttpClientModule,
        AnnotationsPlayerModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatCardModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        FormsModule
    ],
    exports: [
          // CDK
    OverlayModule,

    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService
    ],
    entryComponents: [EditAnnotationComponent,  RotiniPanel],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
