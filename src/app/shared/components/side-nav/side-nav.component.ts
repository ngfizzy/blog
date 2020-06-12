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
  // hack to make few routes stick to the top
  @Input() removeTopMargin = false;
  @Output() search = new EventEmitter<string>();
  @Output() private toggle = new EventEmitter<boolean>();

  searchTerm: string;
  searchBoxHasFocus = false;
  isSearchPanelOpen = false;

  readonly contentSizingValues = SideNavContentSizing;

  toggleMe() {
    return this.toggle.emit(!this.isOpen);
  }

  performSearch() {
    this.search.emit(this.searchTerm);
  }
}
