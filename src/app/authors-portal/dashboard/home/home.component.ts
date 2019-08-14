import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-home',
  // templateUrl: './name.component.html',
  // styleUrls: ['./name.component.scss']
  template: '<h1>Home: Welcome To Authors Portal!</h1>'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
