import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

function redirectTo(redirectTo: string): Route {
  return { path: '', pathMatch: 'full', redirectTo };
}

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () => import('@bls041/home').then((m) => m.HomeModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('@bls041/contact').then((m) => m.ContactModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('@bls041/post').then((m) => m.PostModule),
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [ShellComponent],
})
export class ShellModule {}
