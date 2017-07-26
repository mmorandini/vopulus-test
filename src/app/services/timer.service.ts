import { Injectable } from '@angular/core';
declare let videojs;

@Injectable() 

export class TimerService {
	startTimer(){
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
		 
}