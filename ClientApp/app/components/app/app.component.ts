import { Component } from '@angular/core';
import { GameListService } from "../../services/gamelist.service";

@Component({
    selector: 'app',
    providers: [GameListService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
}
