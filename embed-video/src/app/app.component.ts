import { Component } from '@angular/core';
import { EmbedVideo } from './_models/embed-video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embed-video';
  public videoList: EmbedVideo[];
  private _example: string;

  constructor(){
    this._example = '<oembed url="https://www.youtube.com/watch?v=_89xifmWoTI"></oembed>';
    console.log(this._example);
    this.videoList = new Array();
    this.convertToEmbedCode();
  }

  private convertToEmbedCode(){
    const regex = /<oembed.+?url="https?:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})"><\/oembed>/g;
    let embedCode = this._example.replace(regex, '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    let item = <EmbedVideo>{
      embedCode: embedCode
    }    
    this.videoList.push(item);
  }

}
