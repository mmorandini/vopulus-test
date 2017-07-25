import { Component, OnInit } from '@angular/core';
import { PincoPallinoService} from './pincopallino.service';

declare let videojs;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title;

	constructor(private pincopallino: PincoPallinoService){
		this.title = this.pincopallino.pinco;
	}

	ngOnInit(){
		let width = document.documentElement.clientWidth;
		let height = document.documentElement.clientHeight;
		console.log(width);
		var myPlayer = videojs('my-player');
		console.log(myPlayer);
		myPlayer.dimensions(0.9 * width, 0.8 * height);
	}

	changeSrc0(){
		var myPlayer = videojs('my-player');
		myPlayer.src({
			src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
			type: 'application/x-mpegURL'
		});
		myPlayer.play();
	}
	changeSrc1(){
		var myPlayer = videojs('my-player');
		myPlayer.src({
			src: 'http://www.html5videoplayer.net/videos/toystory.mp4',
			type: 'video/mp4'
		});
		myPlayer.play();
	}
	changeSrc2(){
		var myPlayer = videojs('my-player');
		myPlayer.src({
			src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
			type: 'video/mp4'
		});
		myPlayer.play();
	}
}
