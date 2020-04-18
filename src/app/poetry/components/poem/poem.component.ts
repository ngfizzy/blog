import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Poem } from 'src/app/shared/models';

@Component({
  selector: 'app-poem',
  templateUrl: 'poem.component.html',
  styleUrls: [ './poem.component.scss' ]
})
export class PoemComponent implements OnInit {
  @Input() poem: Poem;

  @Output() viewPoem  = new EventEmitter<number>();

  backgroundPlaceholder: string;
  backgroundStyle: any;

  constructor() { }

  ngOnInit() {
    this.backgroundPlaceholder = `url(${this.poem.themeImage})`;

    this.backgroundStyle = {
      'background-image': this.backgroundPlaceholder,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
    };
  }

  view(poemId: number) {
    this.viewPoem.emit(poemId);
  }
}
