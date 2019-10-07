import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  templateUrl: './authors-portal.component.html',
  styleUrls: ['./authors-portal.component.scss']
})
export class AuthorsPortalComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor() { }

  ngOnInit() {}
}
