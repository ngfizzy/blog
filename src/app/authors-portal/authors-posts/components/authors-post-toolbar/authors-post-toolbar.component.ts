import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-posts-toolbar',
  templateUrl: './authors-post-toolbar.component.html',
  styleUrls: ['../shared-styles/authors-toolbar.scss']
})
export class AuthorsPostToolbarComponent implements OnInit {
  @Input() selectedPostTitle = '';

  ngOnInit() {}
}
