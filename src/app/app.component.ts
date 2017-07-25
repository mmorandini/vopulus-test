import { Component } from '@angular/core';
import { PincoPallinoService} from './pincopallino.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title;
	// var myPlayer = videojs('my-player');

	constructor(private pincopallino: PincoPallinoService){
		this.title = this.pincopallino.pinco;
	}
}
