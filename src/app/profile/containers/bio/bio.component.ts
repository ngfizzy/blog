import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="row author-info">
    <p class="col-sm-12 col-md-8 text-center ml-auto mr-auto mb-5 ">
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
    .author-info p {
        &:first-child {
          margin-bottom: 1rem !important;
      }
    }
  `],
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
