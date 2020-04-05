import { SlideShowActionsTypes } from 'src/app/core/constants';

export class PoemDialogOutput {

  constructor(
    public action: SlideShowActionsTypes,
    public poemId: number,
  ) {}
}
