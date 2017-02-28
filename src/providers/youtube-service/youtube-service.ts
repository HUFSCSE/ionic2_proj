import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { window } from '@angular/platform-browser/src/facade/browser';

/*
  Generated class for the YoutubeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class YoutubeService {
  youtube: any={
    ready: false,
    player: null,
    playerId: null,
    videoId: null,
    videoTitle: null,
    playerHeight: '100%',
    playerWidth: '100%'
  }

  constructor(public http: Http) {
    this.setupPlayer();
  }

  setupPlayer(){
    console.log('youtube service setup');
    window['onYouTubeIframeAPIReady'] = () => {
      if ( window['YT'] ){
        console.log('youtube api is ready');
        this.youtube.ready = true;
        this.bindPlayer('placeholder');
        this.loadPlayer();
      }
    };

    if (window.YT && window.YT.Player) {
      console.log('Youtube API is ready');
      this.youtube.ready = true;
      this.bindPlayer('placeholder');
      this.loadPlayer();
    }
  }

  bindPlayer(elementId){
    this.youtube.playerId = elementId;
  }

  loadPlayer(): void {
    if (this.youtube.ready && this.youtube.playerId) {
      if (this.youtube.player) {
        this.youtube.player.destroy();
      }
      this.youtube.player = this.createPlayer();
    }
  }

  createPlayer(): void {
    return new window.YT.Player(this.youtube.playerId, {
      height: this.youtube.playerHeight,
      width: this.youtube.playerWidth,
      playerVars: {
        rel: 0,
        showinfo: 0
      }
    });
  }

  launchPlayer(id, title):void {

    this.youtube.ready = true;
    this.bindPlayer('placeholder');
    this.loadPlayer();

    this.youtube.player.loadVideoById(id);
    this.youtube.videoId = id;
    this.youtube.videoTitle = title;
    return this.youtube;
  }


}
