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
} from 'src/app/shared/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: [ './side-nav.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent  {
  @Input() nav: Nav;
  @Input() isOpen: boolean;
  @Input() mode: SideNavMode;
  @Input() contentUISizing: SideNavContentSizing;
  // hack to make few routes stick to the top
  @Input() removeTopMargin = false;
  @Output() private toggle = new EventEmitter<boolean>();


  readonly contentSizingValues = SideNavContentSizing;

  toggleMe() {
    return this.toggle.emit(!this.isOpen);
  }
}
