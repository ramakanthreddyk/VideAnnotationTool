import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
    readonly showSideNav = new BehaviorSubject<boolean>(false);
    private _showSideNav = false;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
    }
    toggleNav() {
        this._showSideNav = !this._showSideNav ;
        this.showSideNav.next(this._showSideNav);
      }

    ngOnDestroy() {
    }
}
