import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PoetryService } from '../../poetry.service';
import { Observable } from 'rxjs';
import { Poem } from 'src/app/shared/models';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: [ './poems.component.scss' ]
})
export class PoemsComponent implements OnInit {
  poems$: Observable<Poem[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private poetryService: PoetryService,
  ) { }

  ngOnInit() {
    this.poems$ = this.poetryService.getAllPoems();
  }

  showPoemDialog(poemId: number) {
    this.router.navigate(['./', poemId ], { relativeTo: this.route });
  }
}
