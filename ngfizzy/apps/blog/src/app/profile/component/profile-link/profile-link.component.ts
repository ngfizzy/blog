import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-link',
  template: `
    <li>
      <a
        [routerLink]="[path]"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active-link"
        class="d-inline-block h-100 w-100"
      >
        {{name}}
      </a>
    </li>
  `,
  styles: [`
    :host {
      padding: none;
      margin: none;
    }
    li {
      width: 100%;
      list-style: none;
      text-align: center;
      border: 1px solid #2a2a2a;
      background-color: #56a3a629;
      color: #ffffffcf;
      padding: .5rem 0;
    }

    a {
      font-size: 1.2rem;
      color: white;
    }

    a:hover {
      text-decoration: none;
    }
    }

  @media (min-width: 320px) and (max-width: 767.98px){
    a {
      font-size: .8rem;
    }
  }
  `],
})
export class ProfileLinkComponent implements OnInit {
  @Input() path: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() { }
}
