import { Component, OnInit } from '@angular/core';
import { sources } from '../mock-videos';


declare let videojs;

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  	constructor() { }

  	firstVideoIsOn = false;
  	secondVideoIsOn = false;
  	thirdVideoIsOn = false;
  
  	changeSrc(){
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
