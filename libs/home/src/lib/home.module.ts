import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {
  ComponentRouterModule,
  ModuleWithRoute,
} from '@angular-component/router';

@Component({
  template: `
    <router>
      <route path="/">
        <bls041-home *routeComponent></bls041-home>
      </route>
    </router>
  `,
})
export class HomeRouteComponent {}

@NgModule({
  imports: [
    CommonModule,
    ComponentRouterModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent, HomeRouteComponent],
})
export class HomeModule implements ModuleWithRoute {
  routeComponent = HomeRouteComponent;
}
