import { PublicState } from './public.state';
import { PublicActions, PublicActionTypes } from './public.actions';
import { Post } from 'src/app/shared/models';


const defaultState: PublicState = {
    posts: [],
    selectedPost: {
      isLoading: true,
      post: { } as Post,
    },
    isLoading: true
};

export function publicReducer(state: PublicState = defaultState, action: PublicActions): PublicState {
  switch (action.type) {
    case PublicActionTypes.GetAllPosts:
      return {
        ...state,
        isLoading: true,
      };
    case PublicActionTypes.GetAllPostsSuccess:
      return {
        ...state,
        posts: [ ...action.payload],
        isLoading: false,
      };
    case PublicActionTypes.GetOnePost:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          isLoading: true,
        }
      };
    case PublicActionTypes.GetOnePostSuccess:
      return {
        ...state,
        selectedPost: {
          post: { ...action.payload },
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
