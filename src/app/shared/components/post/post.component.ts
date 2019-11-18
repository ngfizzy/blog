import { Component, EventEmitter, OnInit, Input, SimpleChanges, OnChanges, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComponentConfig } from '../../models/post-component-config.interface';
import { Post } from '../../models/post.interface';

enum AnimationState {
  Small = 'small',
  Large = 'large',
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnChanges {
  @Input() config: PostComponentConfig;
  @Input() post: Post;

  @Output() notify = new EventEmitter<string>();
  state = AnimationState.Small;
  truncatedPostLength = 560;

  isActive = false;
  isExpandedView = false;
  postBody: string;
  isTouched: boolean;
  canToggle: boolean;
  isMini: boolean;
  isFull: boolean;
  shouldHideShadows: boolean;
  shouldShowActions: boolean;
  postUrl: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.configureComponent();
    this.postBody = this.getPostBody();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.firstChange) {
      this.postBody = this.getPostBody();
    }
  }

  private configureComponent() {
    this.isActive = this.config.isActive;
    this.isExpandedView = this.config.isExpandedView;
    this.isTouched = this.config.isTouched;
    this.canToggle = this.config.canToggle;
    this.isMini = this.config.isMini;
    this.isFull = this.config.isFull;
    this.shouldHideShadows = this.config.shouldHideShadows;
    this.shouldShowActions = this.config.shouldShowActions;
  }

  copyArticleLink(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.postUrl = `${window.location.origin}/posts/${1}`;

    this.notify.emit('URL successfuly copied to clipboard');
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
      return body;
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
