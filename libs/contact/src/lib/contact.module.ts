import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {
  ComponentRouterModule,
  ModuleWithRoute,
} from '@angular-component/router';

@Component({
  template: `
    <router>
      <route path="/">
        <bls041-contact-list *routeComponent></bls041-contact-list>
      </route>
      <route path="/:contactId">
        <bls041-contact-detail
          [item]="item"
          *routeComponent
        ></bls041-contact-detail>
      </route>
    </router>
  `,
})
class ContactRouteComponent {
  item = {
    key: 'value',
  };
}

@NgModule({
  imports: [CommonModule, ComponentRouterModule],
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactRouteComponent,
  ],
})
export class ContactModule implements ModuleWithRoute {
  routeComponent = ContactRouteComponent;
}
