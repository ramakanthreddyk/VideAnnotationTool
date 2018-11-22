import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from '../_services';
// import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      // private authenticationService: AuthenticationService,
      private auth: AuthenticationService,
      private snackBar: MatSnackBar) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      // this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.openSnackBar('Please fill all details', '');
    } else {
      this.auth.login(this.loginForm.value).then((res: any) => {
        console.log(res);
        if (res.success === true) {
          this.openSnackBar(res.message, '');
         localStorage.setItem('token', res.username);
         this.router.navigate(['home']);
        } else {
          this.openSnackBar(res.message, '');
        }
      }, (err) => {
        this.openSnackBar('Server error', '');
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
    duration: 3000,
    panelClass: ['red-snackbar'],
    });
    }
}
