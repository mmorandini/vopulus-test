import { Component, OnInit } from '@angular/core';
import {Headers} from '@angular/http';

declare let videojs;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title;

	constructor(){}

	firstVideoIsOn = false;
	secondVideoIsOn = false;
	thirdVideoIsOn = false;

	ngOnInit(){
		let myPlayer = videojs('my-player');
		myPlayer.ready(function(){
          this.on("timeupdate", function(){ 
            let whereYouAt = myPlayer.currentTime();
            let hours = Math.floor(whereYouAt/(60*60))
    		let minutes = Math.floor(whereYouAt / 60);   
    		let seconds = Math.floor(whereYouAt - minutes * 60)
    		let x = hours < 10 ? "0" + hours : hours;
    		let y = minutes < 10 ? "0" + minutes : minutes;
    		let z = seconds < 10 ? "0" + seconds : seconds;
    		document.getElementById("current_time").innerHTML = x + ":" + y + ":" + z;
          });
        });       
		}

	changeSrc(){
		let sources = ['https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8','http://www.html5videoplayer.net/videos/toystory.mp4','http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'];
		let myPlayer = videojs('my-player');
		let src;
		let type;

		if (this.firstVideoIsOn === true){
			src  = sources[0];
			type = 'application/x-mpegURL';
		} else if (this.secondVideoIsOn === true){
			src = sources[1];
			type = 'video/mp4';
		} else if (this.thirdVideoIsOn === true){
			src = sources[2];
			type = 'video/mp4';
		} else return;
		myPlayer.src({
			src: src,
			type: type
		});
		myPlayer.play();
		this.firstVideoIsOn = false;
		this.secondVideoIsOn = false;
		this.thirdVideoIsOn = false;
	}
}
