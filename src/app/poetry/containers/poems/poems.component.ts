import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: [ './poems.component.scss' ]
})
export class PoemsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showPoemDialog(poemId: number) {
    this.router.navigate(['./', poemId ], { relativeTo: this.route});
  }
}
