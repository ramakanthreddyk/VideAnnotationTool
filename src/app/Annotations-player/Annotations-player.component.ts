import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { VgAPI, VgStates } from 'videogular2/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../_services';

declare var VTTCue;
export interface ICuePoint {
    title: string;
    description: string;
    src: string;
    href: string;
}

export interface IWikiCue {
    startTime: number;
    endTime: number;
    title: string;
    description: string;
    src: string;
    href: string;
}

@Component({
    selector: 'app-annotations-player',
    templateUrl: './Annotations-player.component.html',
    styleUrls: ['./Annotations-player.component.css']
})
export class AnnotationsPlayerComponent implements OnInit {
    sources: Array<Object>;
    action;
    startTime;
    endTime;
    cuePointData: ICuePoint = null;
    api: VgAPI;
    track: TextTrack;
    showCuePointManager = false;
    annotations: any;
    selectedAnnotation: any;
    tempAnnotation: any;
    newCue: IWikiCue = {
        startTime: 40,
        endTime: 50,
        title: 'Carl Sagan',
        description: 'Carl Edward Sagan (/ˈseɪɡən/; November 9, 1934 – December 20, 1996) was an American astronomer, ',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.JPG',
        href: 'https://en.wikipedia.org/wiki/Carl_Sagan'
    };

    json: JSON = JSON;
    @ViewChild('media') myVideo: any;

    constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private auth: AuthenticationService) {
    }

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (this.api.state === 'playing' && event.shiftKey) {
          const key = event.key.toLowerCase();
            if (event.key !== 'Shift') {
                if (this.action !== key) {
                this.tempAnnotation = this.annotations.filter(eachAnnotation => {
                    return key === eachAnnotation.Annotation;
                  });

                  console.log(this.tempAnnotation);

                  if (this.tempAnnotation.length !== 0) {
                    if (key === this.tempAnnotation[0].Annotation) {
                      this.selectedAnnotation = this.tempAnnotation[0];
                      this.action = key;
                      this.startTime = this.api.currentTime;
                      this.openSnackBar('started annotation' + ` ${this.tempAnnotation[0].Description}`, '');
                    }
                  } else {
                    console.log('unknown');
                  }
                } else {
                    this.endTime = this.api.currentTime;
                    this.openSnackBar('Ended annotation' + ` ${this.selectedAnnotation.Description}`, '');
                    const jsonData = {
                        title: 'Test',
                        description: this.selectedAnnotation.Description,
                        src: '',
                        href: ''
                    };
                    const jsonText = JSON.stringify(jsonData);
                    const userId = localStorage.getItem('token');
                    const dbAnnotation = {
                      startTime: this.startTime,
                      endTime: this.endTime,
                      title: jsonData['title'],
                      description: jsonData['description'],
                      src: jsonData['src'],
                      href: jsonData['href'],
                      id: this.selectedAnnotation.Video_Id,
                      userId: userId
                    };
                    this.auth.storeAnnotation(dbAnnotation).then(res => {
                      console.log(res);
                    });
                    this.track.addCue(
                        new VTTCue(this.startTime, this.endTime, jsonText)
                    );
                    this.action = '';
                }
            }
        }
    }

    ngOnInit() {
      this.auth.selectedVideo.subscribe((val: any) => {
          if (val.Video_Ref) {
              this.sources = [
                  {
                      src: val.Video_Ref,
                      type: 'video/mp4'
                  }
              ];
          }
      });
      this.auth.getUserVideoId.subscribe((val: any) => { console.log(val);
        if (val.username) {
        this.auth.getPreAnnotations(val).then((res: any) => {
          console.log(res.data);
          /* for (let i = this.track.cues.length; i > 2; i-- ) {
                this.track.removeCue(this.track.cues[i]);
          } */
          res.data.forEach(eachObject => {
            const sampleObject = {
              startTime: eachObject.startTime,
              endTime: eachObject.endTime,
              jsonText: {
                title: eachObject.title,
                src: eachObject.src,
                href: eachObject.href,
                description: eachObject.description
              }
            };
            this.track.addCue (new VTTCue ( sampleObject.startTime, sampleObject.endTime, JSON.stringify(sampleObject.jsonText)));
          });
        });
    }
      });
      this.auth.selectedAnnotation.subscribe((val: any) => {
        this.annotations = val;
      });
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
        this.track = this.api.textTracks[0];
        this.api.subscriptions.timeUpdate.subscribe(data => {
        });

        this.api.subscriptions.canPlay.subscribe(data => {
        });
    }

    onSubmit(form: NgForm, event: Event) {
        event.preventDefault();

        if (form.valid) {
            const jsonData = {
                title: form.value.title,
                description: form.value.description,
                src: form.value.src,
                href: form.value.href
            };

            const jsonText = JSON.stringify(jsonData);
            this.track.addCue(
                new VTTCue(form.value.startTime, form.value.endTime, jsonText)
            );
        }
    }

    onClickRemove(cue: TextTrackCue) {
        this.track.removeCue(cue);
    }

    onEnterCuePoint($event) {
        this.cuePointData = JSON.parse($event.text);
    }

    onExitCuePoint($event) {
        this.cuePointData = null;
    }

openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
    duration: 3000,
    panelClass: ['red-snackbar'],
    });
    }
}
