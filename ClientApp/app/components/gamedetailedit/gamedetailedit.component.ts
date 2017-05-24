import { Component, Input } from "@angular/core";
import { Item } from "../../constructors/item";
import { Router, ActivatedRoute } from "@angular/router";
import { GameListService } from "../../services/gamelist.service";

@Component({
    selector: "game-detail-edit",
    template: require('./gamedetailedit.component.html'),
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
            .item-details input[type="text"] {
            display: block;
            width: 100%;
            }
            .item-details textarea {
            display: block;
            width: 100%;
            height: 60px;
            }
            .commands {
            text-align: right;
            margin: 10px 20px 10px 10px;
            }
`]
})
export class GameDetailEditComponent {
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
        else if (id === 0) {
            console.log("id is 0: adding a new item...");
            this.item = new Item(0, "New Item", null);
        }
        else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate([""]);
        }
    }

    onInsert(item: Item) {
        this.gameListService.add(item).subscribe(
            (data) => {
                this.item = data;
                console.log("Item " + this.item.Id + " has been added.");
                this.router.navigate([""]);
            },
            (error) => console.log(error)
        );
    }
    onBack() {
        this.router.navigate([""]);
    }

    onItemDetailView(item: Item) {
        this.router.navigate(["item/view", item.Id]);
    }

    onUpdate(item: Item) {
        this.gameListService.update(item).subscribe(
            (data) => {
                this.item = data;
                console.log("Item " + this.item.Id + " has been updated.");
                this.router.navigate([""]);
            },
            (error) => console.log(error)
        );
    }
    onDelete(item: Item) {
        var id = item.Id;
        this.gameListService.delete(id).subscribe(
            (data) => {
                console.log("Item " + id + " has been deleted.");
                this.router.navigate([""]);
            },
            (error) => console.log(error)
        );
    }
}