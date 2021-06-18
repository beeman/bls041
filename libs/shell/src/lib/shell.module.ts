import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ComponentRouterModule } from '@angular-component/router';

@NgModule({
  imports: [CommonModule, ComponentRouterModule.forRoot()],
  exports: [ComponentRouterModule, ShellComponent],
  declarations: [ShellComponent],
})
export class ShellModule {}
