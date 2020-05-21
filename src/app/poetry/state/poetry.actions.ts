import { CommentPayload } from './../../shared/models/audience-activity-payloads.interface';
import { Action } from '@ngrx/store';
import {
  Poem,
  AudienceActivityUpdateSuccessPayload,
  ApplaudPayload,
} from 'src/app/shared/models';

export const enum PoetryActionTypes {
  GetAllPoems = '[Poetry] Get All',
  GetAllPoemsSuccess = '[Poetry] Get All Poems Success',
  GetPoem = '[Poetry] Get Poem',
  GetPoemSuccess = '[Poetry] Get Poem Success',
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

  constructor(public payload: Poem[]) {}
}

export class GetPoem implements Action {
  readonly type = PoetryActionTypes.GetPoem;

  constructor(public payload: number) {}
}

export class GetPoemSuccess implements Action {
  readonly type = PoetryActionTypes.GetPoemSuccess;

  constructor(public payload: Poem) {}
}

export class Applaud implements Action {
  readonly type = PoetryActionTypes.Applaud;

  constructor(public payload: ApplaudPayload) {}
}
export class ApplaudSuccess implements Action {
  readonly type = PoetryActionTypes.ApplaudSuccess;

  constructor(public payload: AudienceActivityUpdateSuccessPayload) {}
}

export class AddComment implements Action {
  readonly type = PoetryActionTypes.AddComment;

  constructor(public payload: CommentPayload) {}
}

export class AddCommentSuccess implements Action {
  readonly type = PoetryActionTypes.AddCommentSuccess;

  constructor(public payload: AudienceActivityUpdateSuccessPayload) {}
}

export type PoetryActions =
  | GetAllPoems
  | GetAllPoemsSuccess
  | GetPoem
  | GetPoemSuccess
  | Applaud
  | ApplaudSuccess
  | AddComment
  | AddCommentSuccess;
