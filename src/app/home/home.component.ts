import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  assets;
  annotations;
  /* selectedVideo; */
  id;
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.auth.assets().then((res: any) => {
      if (res.success === true) {
        this.assets = res.data;
      } else {
      }
    }, (err) => {
    });
  }
  gotoVideo(data) {
    this.auth.selectedVideoActive(data);
    this.auth.annotation_description().then((res: any) => {
      if (res.success === true) {
        this.annotations = res.data.filter((value: any) => {
          return value.Video_Id === data.Video_Id;
        });
        this.auth.getSelectedAnnotation(this.annotations);
        const username = localStorage.getItem('token');
        const videodata = {videoId: this.annotations[0].Video_Id, username: username};
        this.auth.getUserVideoIdmethod( videodata );
        this.router.navigate(['player']);
      } else {
      }
    }, (err) => {
      console.log(err);
    });
  }
}
