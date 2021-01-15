import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="row author-info">
    <h1 class="text-center col-12">Bio</h1>
    <h2 class="text-center col-12"><a class="text-center" [routerLink]="['/']">Olufisayo Bamidele</a></h2>
    <h3 class="col-12 text-center">Software Engineer</h3>
    <p class="col-sm-12 col-md-8 text-center m-auto">
      I am a Software Engineer who is passionate about adding value to businesses,
      myself, and those around me. With 4+ years of continuous work, growth, learning, unlearning,
      and relearning, I am looking forward to taking on the next big challenge in my journey.
    </p>
  </div>
`,
styles: [`
    .author-info {
      margin-top: 5rem;
      font-size: 1.2rem;
      height: 62%;
    }

    .author-info h1 {
      font-size: 3rem;
      text-decoration: underline;
    }

    .author-info h2 {
      font-size: 2rem;
    }

    h2 a {
      color: #fcd581;
    }

    .author-info h3 {
      font-size: 1.5rem;
    }
  `],
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
