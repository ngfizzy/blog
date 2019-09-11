import { AuthorsPortalState } from './authors-portal.state';
import { AuthorsPortalActionTypes, AuthorsPortalActions } from './authors-portal.actions';


const defaultState: AuthorsPortalState = {
  posts: {
    isLoading: false,
    posts: []
  },
  isLoading: true,
};

export function authorsPortalReducer(state: AuthorsPortalState = defaultState, action: AuthorsPortalActions ) {
  switch (action.type) {
    case AuthorsPortalActionTypes.GetPosts:
      return {
        ...state,
        posts: { ...state.posts, isLoading: true}
      };
    case AuthorsPortalActionTypes.GetPostsSuccess:
      return {
        ...state,
        posts: {
          posts: [ ...action.payload ],
          isLoading: false,
        }
      };
    case AuthorsPortalActionTypes.CreatePost:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoading: true,
        },
      };
    case AuthorsPortalActionTypes.CreatePostSuccess:
      return {
        ...state,
        posts: {
          posts: [
            ...state.posts.posts,
            { ...action.payload }
          ],
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
