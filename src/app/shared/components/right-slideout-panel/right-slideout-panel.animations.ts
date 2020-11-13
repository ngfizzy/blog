import { animate, state, style, transition, trigger } from '@angular/animations';


export const animations = [
  trigger('transitionInOut', [
    state(
      'void',
      style({
        height: 0,
        opacity: 0,
      }),
    ),
    state(
      '*',
      style({
        height: 'fit-content',
        opacity: 1,
      }),
    ),
    transition('void => *, * => void', animate('.2s ease-in-out')),
  ]),
];
