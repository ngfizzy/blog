import { Router } from '@angular/router';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  Nav,
  SideNavMode,
  SideNavContentSizing,
  Article,
} from 'src/app/shared/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  @Input() pageTitle: string;
  @Input() nav: Nav;
  @Input() isOpen: boolean;
  @Input() mode: SideNavMode;
  @Input() contentUISizing: SideNavContentSizing;
  @Input() searchResults: Article[] = [];
  @Input() isSmallDevice: boolean;
  @Input() canToggle: boolean;
  // hack to make few routes stick to the top
  @Input() removeTopMargin = false;
  @Output() search = new EventEmitter<string>();
  @Output() private toggle = new EventEmitter<boolean>();

  searchTerm: string;
  searchBoxHasFocus = false;
  isSearchPanelOpen = false;

  readonly contentSizingValues = SideNavContentSizing;

  constructor(public router: Router) {}

  viewArticle(event: MouseEvent, articleId: number) {
    event.preventDefault();

    this.router
      .navigate(['/articles', articleId])
      .then(() => (this.isSearchPanelOpen = false));
  }

  toggleMe() {
    if (this.canToggle) {
      this.toggle.emit(!this.isOpen);
    }
  }

  goToLocation(
    path: string[],
    queryParams: { [key: string]: string | number },
    toggleNavbar = true,
  ) {
    if (toggleNavbar) {
      this.toggleMe();
    }

    this.router.navigate(path, { queryParams });
  }

  performSearch() {
    this.search.emit(this.searchTerm);
  }
}
