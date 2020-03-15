import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Nav, SideNavMode, SideNavContentSizing } from 'src/app/authors-portal/models';

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
  @Input() contentSizing: SideNavContentSizing;

  @Output() private toggle = new EventEmitter<boolean>();

  toggleMe() {
    return this.toggle.emit(!this.isOpen);
  }
}
