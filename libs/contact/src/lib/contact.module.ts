import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactListComponent,
        children: [
          //
          { path: ':contactId', component: ContactDetailComponent },
        ],
      },
    ]),
  ],
  declarations: [ContactListComponent, ContactDetailComponent],
})
export class ContactModule {}
