import { Component, OnInit } from "@angular/core";
import { Item } from "../../constructors/item";
import { GameListService } from "../../services/gamelist.service";

@Component({
    selector: 'gamelist',
    template: require('./gamelist.component.html'),
    providers: [GameListService],
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
    selectedItem: Item;
    items: Item[];
    errorMessage: string;
    constructor(private gameListService: GameListService) { }
    ngOnInit() {
        this.getLatest();
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
        console.log("item with Id " + this.selectedItem.Id + " has been selected.");
    }
}