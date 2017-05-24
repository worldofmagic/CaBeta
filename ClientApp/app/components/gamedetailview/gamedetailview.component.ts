import { Component, Input } from "@angular/core";
import { Item } from "../../constructors/item";
import { Router, ActivatedRoute } from "@angular/router";
import { GameListService } from "../../services/gamelist.service";

@Component({
    selector: "item-detail-view",
    template: require('./gamedetailview.component.html'),
    styles: [`
            .item-container {
            width: 600px;
            }
            .item-tab-menu {
            margin-right: 30px;
            }
            .item-tab-menu span {
            background-color: #dddddd;
            border: 1px solid #666666;
            border-bottom: 0;
            cursor: pointer;
            display: block;
            float: right;
            margin: 0 0 -1px 5px;
            padding: 5px 10px 4px 10px;
            text-align: center;
            width: 60px;
            }
            .item-tab-menu span.selected {
            background-color: #eeeeee;
            cursor: auto;
            font-weight: bold;
            padding-bottom: 5px;
            }
            .item-details {
            background-color: #eeeeee;
            border: 1px solid black;
            clear: both;
            margin: 0;
            padding: 5px 10px;
            }
            .item-details * {
            vertical-align: middle;
            }
            .item-details .mode {
            font-size: 0.8em;
            color: #777777;
            }
            .item-details ul li {
            padding: 5px 0;
            }
    `]
})

export class GameDetailViewComponent {
    item: Item;
    constructor(private itemService: GameListService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        var id = +this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.itemService.get(id).subscribe(
                item => this.item = item
            );
        }
        else if (id === 0) {
            console.log("id is 0: switching to edit mode...");
            this.router.navigate(["item/edit", 0]);
        }
        else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate([""]);
        }
    }

    onItemDetailEdit(item: Item) {
        this.router.navigate(["item/edit", item.Id]);
    }
}