import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/shared/models';

@Component({
  selector: 'app-poem',
  templateUrl: 'poem.component.html',
  styleUrls: [ './poem.component.scss' ]
})
export class PoemComponent implements OnInit {
  @Input() poem: Article = {
    id: 5,
    title: 'This is a poem',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mattis lorem. Cras metus lectus, vehicula eu nisl at, pulvinar ultricies nisl. Morbi hendrerit gravida nisl at dictum. Donec sit amet dui blandit, faucibus justo sed, consequat arcu. Nullam est neque, feugiat vitae mi ac, facilisis interdum leo. Phasellus hendrerit magna sit amet lobortis suscipit. Curabitur quis fringilla orci, fringilla blandit ante. Pellentesque eu orci eget justo sollicitudin consequat non cursus nunc. Phasellus ac maximus neque, sed maximus est.',
    authorId:  1,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    tags: [],
    categories: [],
    published: true,
  };

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
      'background-size': 'contain',
    };
  }

  showPoemDialog(poemId: number) {
    this.viewPoem.emit(poemId);
  }
}
