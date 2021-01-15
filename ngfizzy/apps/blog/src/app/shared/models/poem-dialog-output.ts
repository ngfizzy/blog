import { SlideShowActionsTypes } from '../../core/constants';

export class PoemDialogOutput {

  constructor(
    public action: SlideShowActionsTypes,
    public poemId: number,
  ) {}
}
