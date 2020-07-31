import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/app/shared/models/graphql-responses/responses';


interface NextActions {
  ErrorAction: any,
  SuccessAction: any,
}

interface Response extends BaseResponse {
  [key:string]: any
}

@Injectable({providedIn: 'root'})
export class NextActionService {
  constructor() { }

  getNextActions(response: Response, actions: NextActions) {
    if (response.error) {
      return new actions.ErrorAction(response.error);
    }

    return new actions.SuccessAction(response);
  }
}
