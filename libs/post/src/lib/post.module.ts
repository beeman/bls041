import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PostListComponent },
      { path: ':postId', component: PostDetailComponent },
    ]),
  ],
  declarations: [PostListComponent, PostDetailComponent],
})
export class PostModule {}
