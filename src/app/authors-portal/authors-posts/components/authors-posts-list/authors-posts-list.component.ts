import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'app-authors-posts-list',
  templateUrl: './authors-posts-list.component.html',
  styleUrls: [ './authors-posts-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsPostsListComponent implements OnInit {
 @Input() postsList: Post[];
 @Output() showFullPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onShowFullPost(postId: number) {
    this.showFullPost.emit(postId);
  }
}
