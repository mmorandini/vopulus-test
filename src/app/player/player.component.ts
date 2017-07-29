import { Component, OnInit } from '@angular/core';
import { sources } from '../videos-data';


declare let videojs;

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent {
	constructor() { }
  	changeSrc(index){
		const myPlayer = videojs('my-player');
		const src = sources[index];
		let type;
		(index === 0) ? type = 'application/x-mpegURL' : type = 'video/mp4';
		myPlayer.src({
			src: src,
			type: type
		});
		myPlayer.play();
	}
}
