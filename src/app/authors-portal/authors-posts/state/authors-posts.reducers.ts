import { AuthorsPostsState } from './authors-posts.state';
import { AuthorsPostsActionTypes, AuthorsPostsActions } from './authors-posts.actions';
import { Post } from 'src/app/shared/models';


const defaultState: AuthorsPostsState = {
  isLoading: false,
  posts: [],
  selectedPost: {
    isLoading: false,
    status: 'saved',
    post: { title: '', body: '' } as Post,
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
      case AuthorsPostsActionTypes.EditPostTitle:
      case AuthorsPostsActionTypes.EditPostBody:
        return {
          ...state,
          selectedPost: {
            ...state.selectedPost,
            isLoading: true,
            status: 'saving',
          },
        };
      case AuthorsPostsActionTypes.EditPostTitleSuccess:
        return {
          ...state,
          posts: [ ...action.payload.posts ],
          selectedPost: {
            ...state.selectedPost,
            post: { ...action.payload.selectedPost },
            isLoading: false,
            status: 'saved',
          }
        };
      case AuthorsPostsActionTypes.EditPostBodySuccess:
        return {
          ...state,
          posts: [ ...action.payload.posts ],
          selectedPost: {
            ...state.selectedPost,
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
      case AuthorsPostsActionTypes.TagPost:
        return state;
      case AuthorsPostsActionTypes.UntagPost:
        return state;
      case AuthorsPostsActionTypes.TagPostSuccess:
      case AuthorsPostsActionTypes.UntagPostSuccess:
        return {
          ...state,
          posts: [ ...action.payload.posts ],
          selectedPost: {
            ...state.selectedPost,
            post: {
              ...action.payload.selectedPost,
              tags: [ ...action.payload.selectedPost.tags ]
            }
          },
        };
      case AuthorsPostsActionTypes.CategorizePost:
        return state;
      case AuthorsPostsActionTypes.RemovePostFromCategory:
        return state;
      case AuthorsPostsActionTypes.CategorizePostSuccess:
        return {
          ...state,
          posts: [ ...action.payload.posts ],
          selectedPost: {
              ...state.selectedPost,
            post: {
              ...action.payload.selectedPost,
              categories: [ ...action.payload.selectedPost.categories ]
            }
          },
        };
      case AuthorsPostsActionTypes.TogglePublished:
        return state;
      case AuthorsPostsActionTypes.TogglePublishedSuccess:
        return {
          ...state,
          posts: [ ...action.payload.posts ],
          selectedPost: {
            ...state.selectedPost,
            post: { ...action.payload.selectedPost },
          },
        };
      default:

        return state;
    }
}
