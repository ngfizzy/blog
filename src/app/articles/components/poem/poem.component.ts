import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/models';

@Component({
  selector: 'app-poem',
  templateUrl: 'poem.component.html',
  styleUrls: [ './poem.component.scss' ]
})

export class PoemComponent implements OnInit {
  @Input() poem: Article;

  constructor() { }

  ngOnInit() { }
}
