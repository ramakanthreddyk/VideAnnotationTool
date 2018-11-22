import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private _showFullNav: boolean;
  constructor(private app: AppComponent) {
    this.app.showSideNav.subscribe((value) => {
      this._showFullNav = value;
    });
   }

  ngOnInit() {
  }

}
