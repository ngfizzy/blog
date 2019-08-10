import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComponentConfig } from '../../models/post-component-config.interface';

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
  @Input() config: PostComponentConfig;
  @Input() post;
  state = AnimationState.Small;
  truncatedPostLength = 560;

  isActive = false;
  isExpandedView = false;
  postBody: string;
  isTouched: boolean;
  canToggle: boolean;

  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.configureComponent();

    this.postBody = this.getPostBody();
  }

  private configureComponent() {
    this.isActive = this.config.isActive;
    this.isExpandedView = this.config.isExpandedView;
    this.isTouched = this.config.isTouched;
    this.canToggle = this.config.canToggle;
  }

  toggleElevation() {
    this.isActive = !this.isActive;
  }

  toggleExpandedView() {
    if (this.canToggle) {
      this.isTouched = true;
      this.isExpandedView = !this.isExpandedView;
      this.postBody = this.getPostBody();
    }
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
