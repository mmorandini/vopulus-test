import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from './player/player.component'

declare let videojs;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild(PlayerComponent)
  	private child: PlayerComponent;
	constructor(){}
}
