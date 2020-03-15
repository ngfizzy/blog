import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/article.interface';

@Component({
  templateUrl: './authors-portal.component.html',
  styleUrls: ['./authors-portal.component.scss']
})
export class AuthorsPortalComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor() { }

  ngOnInit() {}
}
