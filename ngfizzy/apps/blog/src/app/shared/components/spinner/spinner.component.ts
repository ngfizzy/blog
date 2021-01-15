import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.scss'],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  mode = 'indeterminate';
  value = 50;
}
