import { AuthorsPostsState } from './authors-posts.state';
import { AuthorsPostsActionTypes, AuthorsPostsActions } from './authors-posts.actions';


const defaultState: AuthorsPostsState = {
  isLoading: false,
  posts: [],
  selectedPost: {
    isLoading: false,
    status: 'saved',
    post: { title: '', body: ''}
  },
};

export function authorsPostsReducers(
    state: AuthorsPostsState = defaultState,
    action: AuthorsPostsActions
  ): AuthorsPostsState {
    switch (action.type) {
      case AuthorsPostsActionTypes.GetPosts:
        return {
          ...state,
          isLoading: true,
        };
      case AuthorsPostsActionTypes.GetPostsSuccess:
        return {
          ...state,
          posts: [ ...action.payload ],
          isLoading: false,
        };
      case AuthorsPostsActionTypes.CreatePost:
        return { ...state, isLoading: true };
      case AuthorsPostsActionTypes.CreatePostSuccess:
        return {
          ...state,
          posts: [ { ...action.payload }, ...state.posts ],
          selectedPost: {
            post: { ...action.payload },
            isLoading: false,
            status: 'saved',
          },
          isLoading: false,
        };
      case AuthorsPostsActionTypes.ViewPost:
        return {
          ...state,
          selectedPost: {
            ...state.selectedPost,
            isLoading: true,
            status: 'saving'
          }
        };
      case AuthorsPostsActionTypes.ViewPostSuccess:
        return {
          ...state,
          selectedPost: {
            post: { ...action.payload },
            isLoading: false,
            status: 'saved'
          }
        };
      case AuthorsPostsActionTypes.EditPost:
        return {
          ...state,
          selectedPost: {
            ...state.selectedPost,
            isLoading: true,
            status: 'saving',
          },
        };
      case AuthorsPostsActionTypes.EditPostSuccess:
        return {
          ...state,
          posts: [ ...action.payload.posts ],
          selectedPost: {
            post: { ...action.payload.selectedPost },
            isLoading: false,
            status: 'saved',
          }
        };
      case AuthorsPostsActionTypes.ChangePostStatus:
        return {
          ...state,
          selectedPost: {
            ...state.selectedPost,
            status: action.payload,
          }
        };
      default:
        return state;
    }
}
