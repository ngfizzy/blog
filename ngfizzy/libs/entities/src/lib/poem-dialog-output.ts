import { SlideShowActionsTypes } from '@ngfizzy/entities/constants';

export class PoemDialogOutput {

  constructor(
    public action: SlideShowActionsTypes,
    public poemId: number,
  ) {}
}
