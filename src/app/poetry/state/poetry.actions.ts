import { CommentPayload } from './../../shared/models/audience-activity-payloads.interface';
import { Action } from '@ngrx/store';
import {
  Poem,
  ApplaudPayload,
} from 'src/app/shared/models';
import { AudienceActivitiesResponse } from 'src/app/shared/models/graphql-responses/responses';
import { PoemsResponse, PoemResponse } from '../poetry-shared/models/graphql-responses/responses';

export const enum PoetryActionTypes {
  GetAllPoems = '[Poetry] Get All',
  GetAllPoemsSuccess = '[Poetry] Get All Poems Success',
  GetAllPoemsError = '[Poetry] Get All Poems Error',
  GetPoem = '[Poetry] Get Poem',
  GetPoemSuccess = '[Poetry] Get Poem Success',
  GetPoemError = '[Poetry] Get Poem Error',
  Applaud = '[Poetry] Applaud',
  ApplaudSuccess = '[Poetry] Applaud Success',
  AddComment = '[Poetry] Add Comment',
  AddCommentSuccess = '[Poetry] Add Comment Success',
}

export class GetAllPoems implements Action {
  readonly type = PoetryActionTypes.GetAllPoems;
}

export class GetAllPoemsSuccess implements Action {
  readonly type = PoetryActionTypes.GetAllPoemsSuccess;

  constructor(public payload: PoemsResponse) {}
}

export class GetAllPoemsError {
  readonly type = PoetryActionTypes.GetAllPoemsError;

  constructor(public payload: string) {}
}

export class GetPoem implements Action {
  readonly type = PoetryActionTypes.GetPoem;

  constructor(public payload: number) {}
}

export class GetPoemSuccess implements Action {
  readonly type = PoetryActionTypes.GetPoemSuccess;

  constructor(public payload: PoemResponse) {}
}

export class GetPoemError implements Action {
  readonly type = PoetryActionTypes.GetPoemError;

  constructor(public payload: string) {}
}

export class Applaud implements Action {
  readonly type = PoetryActionTypes.Applaud;

  constructor(public payload: ApplaudPayload) {}
}
export class ApplaudSuccess implements Action {
  readonly type = PoetryActionTypes.ApplaudSuccess;

  constructor(public payload) {}
}

export class AddComment implements Action {
  readonly type = PoetryActionTypes.AddComment;

  constructor(public payload: CommentPayload) {}
}

export class AddCommentSuccess implements Action {
  readonly type = PoetryActionTypes.AddCommentSuccess;

  constructor(public payload: AudienceActivitiesResponse) {}
}

export type PoetryActions =
  | GetAllPoems
  | GetAllPoemsSuccess
  | GetAllPoemsError
  | GetPoem
  | GetPoemError
  | GetPoemSuccess
  | Applaud
  | ApplaudSuccess
  | AddComment
  | AddCommentSuccess;
