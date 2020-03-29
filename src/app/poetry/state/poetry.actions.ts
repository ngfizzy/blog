import { Action } from '@ngrx/store';
import { Poem } from 'src/app/shared/models';

export const enum PoetryActionTypes {
  GetAllPoems = '[Poetry] Get All',
  GetAllPoemsSuccess = '[Poetry] Get All Poems Success',
  GetPoem = '[Poetry] Get Poem',
  GetPoemSuccess = '[Poetry] Get Poem Success'
}

export class GetAllPoems implements Action {
  readonly type = PoetryActionTypes.GetAllPoems;
}

export class GetAllPoemsSuccess implements Action {
  readonly type =  PoetryActionTypes.GetAllPoemsSuccess;

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

export type PoetryActions =  GetAllPoems
| GetAllPoemsSuccess
| GetPoem
| GetPoemSuccess;
