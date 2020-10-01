import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styles: [`
    .home-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    header {
      padding: 2rem 0;
    }

    header h1 {
      font-size: 5rem;
    }

    main p {
      font-size: 1.2rem;
    }

  .social .fa {
    padding: 0.4rem;
    font-size: 1.5rem;
  }

  nav ul,
  nav li {
    display: inline-block;
  }

  header a {
    color: inherit;
  }

  nav a {
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    text-decoration: underline;
  }

  .main {
    height: 52rem;
  }

  @media (min-width: 320px) and (max-width: 767.98px) {
    header {
      padding: 1.5rem 0;
      margin-bottom: -1rem;
    }

    header h1 {
      font-size: 2rem;
    }

    .main {
      height: 34rem;

      p {
        font-size: 0.8rem;
      }

      .avatar-container {
        margin-top: -1rem;
      }

      .nav-container {
        margin-top: 0rem !important;
      }


      nav a {
        font-size: .8rem;
      }
    }
  }
`]
})
export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
