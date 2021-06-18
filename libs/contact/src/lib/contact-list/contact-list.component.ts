import { Component, OnInit } from '@angular/core';
import { Router } from '@angular-component/router';

@Component({
  selector: 'bls041-contact-list',
  template: `
    <h1>contact-list works!</h1>

    <ng-container *ngFor="let item of items">
      <div>
        <a [linkTo]="'' + item">Item {{ item }}</a>
        <button (click)="navigate('' + item)">Item {{ item }}</button>
      </div>
    </ng-container>
  `,
})
export class ContactListComponent {
  items = [1, 2, 3];

  constructor(private readonly router: Router) {}

  navigate(route: string) {
    console.log('Hay ', route);
    this.router.go(route);
  }
}
