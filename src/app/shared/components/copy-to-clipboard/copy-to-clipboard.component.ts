import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: [ './copy-to-clipboard.component.scss' ]
})
export class CopyToClipboardComponent implements OnInit {
  @Input() description = 'Copy To Clipboard';
  @Input() contentToCopy: string;

  @Output() copied = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  @HostListener('click', ['$event'])
  copy(event: MouseEvent) {
    event.cancelBubble = true;

    this.copied.emit();
  }
}
