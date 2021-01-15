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
import { Audience } from '@ngfizzy/entities';
import {
  ArticleComponentConfig,
  Article,
  AudienceActivity,
  CommentPayload,
  ApplaudPayload
} from '@ngfizzy/entities';

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
  @Input() audienceActivities: AudienceActivity[];
  @Input() currentAudience: Audience;
  @Input() currentUserApplauds: number;
  @Input() showAudienceSection = true;


  @Output() notify = new EventEmitter<string>();
  @Output() opened = new EventEmitter<Article>();
  @Output() addComment = new EventEmitter<CommentPayload>();
  @Output() applaud = new EventEmitter<ApplaudPayload>();
  @Output() updateUserApplaud = new EventEmitter<number>();


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
    return this.article && this.article.themeImage || '/assets/idea-icon.png';
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

  submitApplauds(payload: ApplaudPayload) {
    this.applaud.emit(payload);
  }

  submitComment(payload: CommentPayload) {
    this.addComment.emit(payload);
  }

  updateAudienceApplauds(payload: number) {
    this.updateUserApplaud.emit(payload);
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
    if (this.canToggle) {
      this.isTouched = true;
      this.isExpandedView = !this.isExpandedView;
      this.articleBody = this.getArticleBody();

    }

    this.opened.emit(this.article);
  }

  getArticleBody() {
    return this.article.body;
  }

}
