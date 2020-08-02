import { PoetryState } from './poetry.state';
import { PoetryActions, PoetryActionTypes } from './poetry.actions';

const defaultState: PoetryState = {
  title: '',
  isLoading: false,
  poems: [],
  selectedPoem: {
    isLoading: false,
    poem: null,
    error: '',
    activitiesState: {
      isLoading: true,
      activities: [],
      error: ''
    },
  },
  navState: {
    isLoading: true,
    nav: null
  },
  audienceState: {
    audience: null,
    isLoading: true,
  },
  error: ''
};

export function poetryReducers(
  state = defaultState,
  action: PoetryActions
): PoetryState {
  switch (action.type) {
    case PoetryActionTypes.GetAllPoems:
      return { ...state, isLoading: true };
    case PoetryActionTypes.GetAllPoemsSuccess:
      return {
        ...state,
        poems: [...action.payload.poems],
        isLoading: false,
      };
    case PoetryActionTypes.GetPoem:
      return {
        ...state,
        selectedPoem: {
          ...state.selectedPoem,
          isLoading: true,
          activitiesState: {
            ...state.selectedPoem.activitiesState,
            isLoading: false,
          },
        },
      };
    case PoetryActionTypes.GetPoemSuccess:
      return {
        ...state,
        selectedPoem: {
          ...state.selectedPoem,
          poem: { ...action.payload },
          activitiesState: {
            ...state.selectedPoem.activitiesState,
            isLoading: false,
          },
          isLoading: false,
        },
      };
    case PoetryActionTypes.Applaud:
      return {
        ...state,
        selectedPoem: {
          ...state.selectedPoem,
          activitiesState: {
            ...state.selectedPoem.activitiesState,
            isLoading: true,
          },
          isLoading: false,
        },
      };
    case PoetryActionTypes.ApplaudSuccess: {
      const { articleId, activities } = action.payload;
      const index = state.poems.findIndex((a) => a.id === articleId);
      const poem = state.poems[index];

      poem.audienceActivities = activities;
      state.poems[index] = poem;

      return {
        ...state,
        selectedPoem: {
          ...state.selectedPoem,
          poem: {
            ...poem,
            audienceActivities: [...poem.audienceActivities],
          },
          activitiesState: {
            ...state.selectedPoem.activitiesState,
            activities: [...activities],
            isLoading: false,
          },
        },
      };
    }
    case PoetryActionTypes.AddComment:
      return {
        ...state,
        selectedPoem: {
          ...state.selectedPoem,
          poem: {
            ...state.selectedPoem.poem,
            audienceActivities: [...state.selectedPoem.poem.audienceActivities],
          },
          activitiesState: {
            ...state.selectedPoem.activitiesState,
            isLoading: true,
          },
        },
      };
    case PoetryActionTypes.AddCommentSuccess: {
      const poemIndex = state.poems.findIndex(
        (p) => p.id === action.payload.articleId
      );

      const poem = state.poems[poemIndex];

      poem.audienceActivities = [...action.payload.activities];
      state.poems[poemIndex] = poem;

      return {
        ...state,
        poems: [...state.poems],
        selectedPoem: {
          ...state.selectedPoem,
          poem: { ...poem },
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
}
