import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bls041-shell',
  template: `
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">BLS041</a>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ng-container *ngFor="let link of links">
              <a class="nav-link" [routerLink]="link.path">{{ link.label }}</a>
            </ng-container>
          </div>
        </div>
      </nav>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class ShellComponent {
  links = [
    { path: 'home', label: 'Home' },
    { path: 'contacts', label: 'Contact' },
    { path: 'posts', label: 'Posts' },
  ];
}
