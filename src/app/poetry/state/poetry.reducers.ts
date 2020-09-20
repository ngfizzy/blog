import { PoetryState } from './poetry.state';
import { PoetryActions, PoetryActionTypes } from './poetry.actions';
import { Poem } from 'src/app/shared/models';
import { PoemsCarouselComponent } from '../components/poems-carousel/poems-carousel.component';
import { strictEqual } from 'assert';

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
          poem: { ...action.payload.poem },
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
      const poem: Poem = {
        ...state.poems[index],
        audienceActivities: activities
      };
      const poems = [ ...state.poems];
      poems[index] = poem;

      return {
        ...state,
        poems,
        selectedPoem: {
          ...state.selectedPoem,
          poem,
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
      const poem: Poem = {
        ...state.poems[poemIndex],
        audienceActivities: action.payload.activities
     };
      const poems = [...state.poems];

      poems[poemIndex] = poem;

      return {
        ...state,
        poems,
        selectedPoem: {
          ...state.selectedPoem,
          poem,
          isLoading: false,
          error: ''
        },
        error: ''
      };
    }
    default:
      return state;
  }
}
