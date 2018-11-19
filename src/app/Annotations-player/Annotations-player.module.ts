import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationsPlayerComponent } from './Annotations-player.component';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgControlsModule } from 'videogular2/controls';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgControlsModule
    ],
    declarations: [ AnnotationsPlayerComponent ],
    exports: [AnnotationsPlayerComponent]
})
export class AnnotationsPlayerModule {
}
