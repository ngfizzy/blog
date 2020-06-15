import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
} from '@angular/core';
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
  @Output() opened = new EventEmitter<Article>();

  state = AnimationState.Small;
  truncatedArticleLength = 600;

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

  get themeImage() {
    return this.article && this.article.themeImage;
  }

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
    this.articleUrl = `${window.location.origin}/articles/${this.article.id}`;

    this.notify.emit('URL successfully copied to clipboard');
  }

  toggleElevation() {
    this.isActive = !this.isActive;
  }

  openArticle(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.canToggle) {
      this.isTouched = true;
      this.isExpandedView = !this.isExpandedView;
      this.articleBody = this.getArticleBody();

      const article = this.isExpandedView ? this.article : null;

      if (article) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      this.opened.emit(article);
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

    return body;
    // if (body.length <= at) {
    //   return body;
    // }

    // return body.substr(0, at) + '<br> >>click me to read more';
  }
}
