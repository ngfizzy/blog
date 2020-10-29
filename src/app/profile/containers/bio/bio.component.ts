import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="row author-info">
    <p class="col-sm-12 col-md-8 text-center m-auto">
      Hello! M name is John Doe, a Software Developer and a writer based in Nigeria.
      When I'm not doing an of those things, netflix and chill.
    </p>

    <p class="col-sm-12 col-md-8 text-center m-auto">
      I am more experienced in Web Development with skills in Javascript/Node.js, PHP and frameworks
      within these language domain. Although those are m current area of knowledge, I'm always excited
      when there is an opportunity to explore something new.
    </p>
  </div>
`,
styles: [`
    .author-info {
      margin-top: 5rem;
      font-size: 1.2rem;
      height: 62%;
    }
  `],
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
