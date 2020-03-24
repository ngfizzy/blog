import { Component, EventEmitter, OnInit, Input, SimpleChanges, OnChanges, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleComponentConfig } from '../../models/article-component-config.interface';
import { Article } from '../../models/article.interface';

enum AnimationState {
  Small = 'small',
  Large = 'large',
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnChanges {
  @Input() config: ArticleComponentConfig;
  @Input() article: Article;

  @Output() notify = new EventEmitter<string>();
  state = AnimationState.Small;
  truncatedArticleLength = 560;

  isActive = false;
  isExpandedView = false;
  articleBody: string;
  isTouched: boolean;
  canToggle: boolean;
  isMini: boolean;
  isFull: boolean;
  shouldHideShadows: boolean;
  shouldShowActions: boolean;
  articleUrl: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.configureComponent();
    this.articleBody = this.getArticleBody();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.firstChange) {
      this.articleBody = this.getArticleBody();
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

  copyArticleLink() {
    this.articleUrl = `${window.location.origin}/articles/${1}`;

    this.notify.emit('URL successfully copied to clipboard');
  }

  toggleElevation() {
    this.isActive = !this.isActive;
  }

  toggleExpandedView() {
    if (this.canToggle) {
      this.isTouched = true;
      this.isExpandedView = !this.isExpandedView;
      this.articleBody = this.getArticleBody();
    }
  }

  getArticleBody() {
    const { body } = this.article;

    if (this.isExpandedView || this.isTouched) {
      return body;
    }

    return this.truncate(this.truncatedArticleLength);
  }

  truncate(at: number) {
    const { body } = this.article;

    if (body.length <= at) {
      return body;
    }

    return body.substr(0, at) + '...';
  }
}
