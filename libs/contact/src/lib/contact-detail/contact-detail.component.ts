import { Component, Input, OnInit } from '@angular/core';
import { QueryParams, RouteParams } from '@angular-component/router';

@Component({
  selector: 'bls041-contact-detail',
  template: `
    <div>
      <p>contact-detail works!</p>
      <ng-container *ngIf="routeParams$ | async as routeParams">
        <pre>{{ routeParams | json }}</pre>
        <pre>{{ routeParams.contactId }}</pre>
      </ng-container>

      <ng-container *ngIf="queryParams$ | async as queryParams">
        <pre>{{ queryParams | json }}</pre>
        <pre>{{ queryParams.debug }}</pre>
      </ng-container>
      <pre>{{ item | json }}</pre>
    </div>
  `,
})
export class ContactDetailComponent {
  @Input() item: any = {};
  routeParams$ = this.routeParams;
  queryParams$ = this.queryParams;
  constructor(
    private readonly routeParams: RouteParams<{ contactId: string }>,
    private readonly queryParams: QueryParams<{ debug: boolean }>
  ) {}
}
