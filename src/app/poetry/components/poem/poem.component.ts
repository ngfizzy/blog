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

  backgroundPlaceholders = [
    'assets/poetry.jpeg',
    'assets/poetry1.jpg',
    'assets/poetry2.jpeg',
    'assets/poetry3.jpeg',
    'assets/poetry4.jpeg',
    'assets/poetry5.jpeg'
  ];

  backgroundPlaceholder: string;
  backgroundStyle: any;

  constructor() { }

  ngOnInit() {
    const placeHolderIndex = Math.floor(Math.random() * 6);
    this.backgroundPlaceholder = `url(${this.backgroundPlaceholders[placeHolderIndex]})`;

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
