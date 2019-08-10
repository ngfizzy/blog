import { PostState } from './post.state';
import { OnePostActions, OnePostActionTypes } from './one-post.actions';


const defaultState: PostState = {
  post: null,
};

export function onePostReducer(state: PostState = defaultState, action: OnePostActions) {
  switch (action.type) {
    case OnePostActionTypes.GetOnePost:
      return {
        ...state,
      };
    case OnePostActionTypes.GetOnePostSuccess:
      return {
        ...state,
        post: { ...action.payload }
      };
    default:
      return state;
  }
}
