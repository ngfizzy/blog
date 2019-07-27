import { Component, OnInit, Input } from '@angular/core';

enum AnimationState {
  Small = 'small',
  Large = 'large',
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post;
  state = AnimationState.Small;
  truncatedPostLength = 560;

  isActive = false;
  isExpandedView = false;
  postBody: string;
  isTouched: boolean;

  ngOnInit(): void {
    this.postBody = this.getPostBody();
  }

  toggleElevation() {
    this.isActive = !this.isActive;
  }

  toggleExpandedView() {
    this.isTouched = true;
    this.isExpandedView = !this.isExpandedView;

    this.postBody = this.getPostBody();
  }

  getPostBody() {
    const { body } = this.post;

    if (this.isExpandedView || this.isTouched) {
      return this.post.body;
    }

    return this.truncate(this.truncatedPostLength);
  }

  truncate(at: number) {
    const { body } = this.post;

    if (body.length <= at) {
      return body;
    }

    return body.substr(0, at) + '...';
  }
}
