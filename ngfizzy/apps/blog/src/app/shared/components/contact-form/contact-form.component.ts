import { Component, OnInit } from '@angular/core';
import { CoreState, audienceContacted } from '../../../core/state';
import { Store, select } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { SendMessage } from '../../../core/state/core.actions';
import { Audience } from '../../models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [`
    .mat-form-field {
      margin-bottom: 1.3rem;
    }

    form {
      background-color: rgba(255, 255, 255, 0.01);
    }

    .form-container {
      padding: .5rem;
      background-color: rgba(255, 255, 255, 0.3);
    }

    .fit-width {
      width: 100%;
    }
  `],
})
export class ContactFormComponent implements OnInit {
  errorMessage: string;
  name: string;
  message: string;
  email: string;

  contacted$: Observable<boolean>;

  constructor(private store: Store<CoreState>) { }

  ngOnInit() {
    this.contacted$ = this.store.pipe(select(audienceContacted));
   }

  sendMessage(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please correct the invalid field';
    } else {
      this.errorMessage = '';

      const audience = { email: this.email, audienceName: this.name } as Audience;

      this.store.dispatch(new SendMessage({
        audience,
        message: this.message
      }));
    }
  }
}
