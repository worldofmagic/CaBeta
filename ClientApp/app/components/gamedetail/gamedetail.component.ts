import { Component, Input } from "@angular/core";
import { Item } from "../../constructors/item";
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
}