import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { TimerService } from './services/timer.service';

declare let videojs;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TimerService]
})
export class AppComponent {

	@ViewChild(PlayerComponent)
  	private child: PlayerComponent;
	
	constructor(private timerService: TimerService){}

	ngOnInit(){
		this.timerService.startTimer();
	}
}
