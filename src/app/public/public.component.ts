import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'public.component.html',
  styleUrls: [ 'public.component.scss' ],
})
export class PublicComponent implements OnInit {

  aboutAuthor = {
    name: 'Olufisayo Bamidele',
    profession: 'Software Engineer and Writer',
    description: `
      Hey There! Welcome to my blog. I write about variety of topics
       ranging from Tech, Self-help articles, Poems and any other thing my Muse
      whispers.
    `
  };

  constructor() { }

  ngOnInit() { }
}
