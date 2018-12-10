import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {
  ComponentPortal,
  Portal,
  TemplatePortalDirective
} from '@angular/cdk/portal';
import {
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-annotation-overlay',
  templateUrl: './annotation-overlay.component.html',
  styleUrls: ['./annotation-overlay.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AnnotationOverlayComponent {
  nextPosition = 0;
  overlayRef: OverlayRef;
  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  openRotiniPanel() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .left(`${this.nextPosition}px`)
        .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    config.hasBackdrop = true;

    this.overlayRef = this.overlay.create(config);

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.dispose();
    });
    this.overlayRef.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
  }

closeRotiniPanel() {
  this.overlayRef.dispose();
}

}

/** Simple component to load into an overlay */
@Component({
  selector: 'rotini-panel',
  template: '<p class="demo-rotini">Rotini {{value}}</p>'
})
export class RotiniPanel {
  value = 9000;
}
