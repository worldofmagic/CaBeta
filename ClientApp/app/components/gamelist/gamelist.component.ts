import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "../../constructors/item";
import { GameListService } from "../../services/gamelist.service";

@Component({
    selector: 'gamelist',
    template: require('./gamelist.component.html'),
    styles: [`
                ul.items li {
                                cursor: pointer;
                             }
                ul.items li.selected {
                                        background-color: #cccccc;
                                        }
            `]
})
export class GameListComponent implements OnInit {
    @Input() class: string;
    title: string;
    selectedItem: Item;
    items: Item[];
    errorMessage: string;
    constructor(private gameListService: GameListService, private router: Router) { }
    ngOnInit() {
        console.log("ItemListComponent instantiated with the following type: "+this.class);
        var s = null;
        switch (this.class) {
            case "latest":
            default:
                this.title = "Latest Items";
                s = this.gameListService.getLatest();
                break;
            case "most-viewed":
                this.title = "Most Viewed Items";
                s = this.gameListService.getMostViewed();
                break;
            case "random":
                this.title = "Random Items";
                s = this.gameListService.getRandom();
                break;
        }
        s.subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error
        );
    }
    getLatest() {
        this.gameListService.getLatest()
            .subscribe(
            latestItems => this.items = latestItems,
            error => this.errorMessage = <any>error
            );
    }
    onSelect(item: Item) {
        this.selectedItem = item;
        console.log("Item " + this.selectedItem.Id + " has been clicked:loading Item Viewer...");
        this.router.navigate(["item/view", this.selectedItem.Id]);
    }
}