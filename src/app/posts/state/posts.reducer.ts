import { PostsState } from './posts.state';
import { PostsActions, PostsActionTypes } from './posts.actions';


const defaultState: PostsState = {
  posts: []
};

export function postsReducer(state: PostsState = defaultState, action: PostsActions) {
  switch (action.type) {
    case PostsActionTypes.GetAllPosts:
      return state;
    case PostsActionTypes.GetAllPostsSuccess:
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      return state;
  }
}
