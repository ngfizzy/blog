import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-contact-form',
  template: `
    <div class="mat-elevation-z2 rounded fit-width form-container">
      <h5 class="text-center">Contact Me</h5>
      <span *ngIf="errorMessage">{{errorMessage}}</span>
      <form class="fit-width">
        <mat-form-field class="fit-width mat-form-field" appearance="fill">
          <mat-label>Email Address</mat-label>
          <input matInput type="email" name="email" [(ngModel)]="email" required>
        </mat-form-field>
        <mat-form-field class="fit-width mat-form-field" appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput type="text" name="name" [(ngModel)]="name" required>
        </mat-form-field>
        <mat-form-field class="fit-width mat-form-field" appearance="fill">
          <mat-label>Message</mat-label>
          <textarea matInput type="text" name="message" [(ngModel)]="message" required></textarea>
        </mat-form-field>

        <div class="fit-width mat-form-field">
          <button mat-raised-button color="primary" class="fit-width" type="Submit">Send Message</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .mat-form-field {
    }

    .form-container {
      background-color: rgba(255, 255, 255, .6);
      padding: .5rem;
    }

    .fit-width {
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  errorMessage: string;
  name: string;
  message: string;
  email: string;

  constructor() { }

  ngOnInit() { }
}
