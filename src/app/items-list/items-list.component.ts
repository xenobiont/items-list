import { Component } from '@angular/core';

@Component({
	selector: 'app-items-list',
	templateUrl: './items-list.template.html',
})
export class ItemsList {
	items = ['blue', 'yellow', 'green'];

	addItem(event: Event, newItem: string) {
		event.preventDefault();
		this.items.push(newItem);
	}

	deleteItem(i: number) {
		this.items.splice(i, 1);
	}
}
