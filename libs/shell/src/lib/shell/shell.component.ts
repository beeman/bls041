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
              <a class="nav-link" linkActive="active" [linkTo]="link.path">
                {{ link.label }}
              </a>
            </ng-container>
          </div>
        </div>
      </nav>

      <main>
        <button (click)="showContacts = !showContacts">Enable Contacts</button>
        <router>
          <!--          <ng-container *ngFor="let link of links">-->

          <!--            <route-->
          <!--              [path]="link.path"-->
          <!--              [exact]="link.exact"-->
          <!--              [load]="link.load"-->
          <!--            ></route>-->
          <!--          </ng-container>-->

          <route path="" redirectTo="/home"></route>
          <route
            *ngIf="showContacts"
            path="contacts"
            [exact]="false"
            [load]="modules.contact"
          ></route>
          <route path="home" [load]="modules.home"></route>
          <route path="posts" [load]="modules.post"></route>
        </router>
      </main>
    </div>
  `,
})
export class ShellComponent {
  modules = {
    contact: () => import('@bls041/contact').then((m) => m.ContactModule),
    home: () => import('@bls041/home').then((m) => m.HomeModule),
    post: () => import('@bls041/post').then((m) => m.PostModule),
  };
  showContacts = false;
  links = [
    { path: '/home', label: 'Home' },
    { path: '/contacts', label: 'Contact' },
    { path: '/posts', label: 'Posts' },
  ];
  // links: (Route | any)[] = [
  //   {
  //     exact: true,
  //     path: '/home',
  //     label: 'Home',
  //     load: () => import('@bls041/home').then((m) => m.HomeModule),
  //   },
  //   {
  //     exact: false,
  //     path: '/contacts',
  //     label: 'Contact',
  //     load: () => import('@bls041/contact').then((m) => m.ContactModule),
  //   },
  //   {
  //     exact: true,
  //     path: '/posts',
  //     label: 'Posts',
  //     load: () => import('@bls041/post').then((m) => m.PostModule),
  //   },
  // ];
}
