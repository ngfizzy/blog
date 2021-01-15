import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-slide-control',
  templateUrl: './slide-control.component.html',
  styleUrls: [ './slide-control.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideControlComponent implements OnInit {
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();

  @Input() controlsColor: string;

  constructor() { }

  ngOnInit() { }
}
