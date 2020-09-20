import { Injectable } from '@angular/core';
import { Action, ActionCreator } from '@ngrx/store';
import { BaseResponse } from 'src/app/shared/models/graphql-responses/responses';


interface NextActions {
  ErrorAction: any;
  SuccessAction: any;
}

interface Response extends BaseResponse {
  [key: string]: any;
}

@Injectable({providedIn: 'root'})
export class NextActionService {
  constructor() { }

  /**
   * @deprecated
   *
   * @param response
   * @param actions
   */
  getNextActions(response: Response, actions: NextActions) {
    if (response.error) {
      return new actions.ErrorAction(response.error);
    }

    return new actions.SuccessAction(response);
  }

  emitNextActions(response: Response, successCallback: ActionCreator, errorCallback: ActionCreator) {
    if (response.error) {
      return errorCallback(response.error) as Action;
    }

    return successCallback(response) as Action;
  }
}
