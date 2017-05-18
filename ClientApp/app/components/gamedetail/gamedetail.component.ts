import { Component, Input } from "@angular/core";
import { Item } from "../../constructors/item";
import { Router, ActivatedRoute } from "@angular/router";
import { GameListService } from "../../services/gamelist.service";

@Component({
    selector: "game-detail",
    template: require('./gamedetail.component.html'),
    styles: [`
        .item-details {
            margin: 5px;
            padding: 5px 10px;
            border: 1px solid black;
            background-color: #dddddd;
            width: 300px;
        }
        .item-details * {
            vertical-align: middle;
        }
        .item-details ul li {
            padding: 5px 0;
        }
`]
})
export class GameDetailComponent {
    @Input("item") item: Item;
    constructor(private gameListService: GameListService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        var id = +this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.gameListService.get(id).subscribe(
                item => this.item = item
            );
        }
        else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate([""]);
        }
    }
}