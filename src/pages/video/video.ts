import {Component} from '@angular/core';
import {Modal, NavController, Alert} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import {YoutubeService} from "../../providers/youtube-service/youtube-service";

/*
  Generated class for the Video page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.

 templateUrl: 'video.html',
*/
@Component({
  templateUrl: 'video2.html',
  providers:[YoutubeService]
})
export class VideoPage {
  topurl: SafeResourceUrl[];

  channelID: string = 'UCbtVfS6cflbIXTZ0nGeRWVA';
  maxResults: string = '10';
  pageToken: string;
  googleToken: string = 'AIzaSyA3qGLojz_0TYmdwEMV-5-3Zi_whbAtweQ';
  searchQuery: string ='ravetraintv -kissing';
  posts: any = [];
  onPlaying: boolean = false;

  constructor(public http: Http, public nav:NavController, public ytPlayer: YoutubeService, public sanitizer: DomSanitizer) {
    this.loadSettings();
    //this.topurl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/8A2t_tAjMz8?&showinfo=0");

  }

  ionViewDidLoad() {
    /*
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    */
  }

  launchYTPlayer(id, title): void {
    this.ytPlayer.launchPlayer(id, title);
  }

  fetchData(): void {
    console.log("heelo fetch")

    let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelID + '&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;

    //let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;

    if(this.pageToken) {
      url += '&pageToken=' + this.pageToken;
    }

    this.http.get(url).map(res => res.json()).subscribe(data => {

      console.log (data.items);
      // *** Get individual video data like comments, likes and viewCount. Enable this if you want it.
      // let newArray = data.items.map((entry) => {
      //   let videoUrl = 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&id=' + entry.id.videoId + '&key=' + this.googleToken;
      //   this.http.get(videoUrl).map(videoRes => videoRes.json()).subscribe(videoData => {
      //     console.log (videoData);
      //     this.posts = this.posts.concat(videoData.items);
      //     return entry.extra = videoData.items;
      //   });
      // });
      this.posts = this.posts.concat(data.items);
    });

  }

  loadSettings(): void {
    this.fetchData();
  }

  openSettings(): void {
    console.log("TODO: Implement openSettings()");
  }

  playVideo(e, post): void {
    console.log(post);
    console.log("id : "+post.id);
    this.onPlaying = true;
    //this.topurl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + post.id.videoId + "?rel=0");
    //this.ytPlayer.launchPlayer(post.id, post.snippet.title);
  }

  mycleanURL(u : string): SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + u + "?rel=0");
  }

  loadMore(): void {
    console.log("TODO: Implement loadMore()");
  }

}
