import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';

import { BaseAudienceSectionComponent } from '../../../../shared/components/base-audience-section/base-audience-section.component';

@Component({
  selector: 'app-authors-audience-section',
  template: `
    <div class="wrapper">
      <app-comment *ngFor="let comment of comments" [comment]="comment"></app-comment>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100%;
      overflow-y: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthorsAudienceSectionComponent extends BaseAudienceSectionComponent {
}
