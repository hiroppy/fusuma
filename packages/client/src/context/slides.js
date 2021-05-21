import React, { createContext, useContext, useReducer } from 'react';
import { getModeFromUrl } from '../utils/getModeFromUrl';
import { getCurrentIndexFromUrl } from '../utils/getCurrentIndexFromUrl';
import { getSlideIndex } from '../utils/getSlideIndex';
import { updateSearchParams } from '../utils/updateSearchParams';

const initialState = {
  mode: getModeFromUrl(),
  currentIndex: getCurrentIndexFromUrl(),
  slides: [],
  contentsList: [],
  timeline: [],
  currentFragmentSteps: 0,
};

const SlidesContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'ADD_SLIDES':
      return { ...state, ...action.payload };
    case 'UPDATE_CURRENT_INDEX': {
      const current = getSlideIndex({
        next: action.payload,
        ...state,
      });

      if (state.currentIndex !== current.currentIndex) {
        updateSearchParams('index', current.currentIndex);
      }

      return {
        ...state,
        ...current,
      };
    }
    case 'RESET_STATE':
      return {
        ...state,
        currentIndex: 0,
        currentFragmentSteps: 0,
      };
    case 'UPDATE_CURRENT_FRAGMENT_STEPS':
      return {
        ...state,
        currentFragmentSteps:
          action.payload === '+' ? state.currentFragmentSteps + 1 : state.currentFragmentSteps - 1,
      };
    default:
      return state;
  }
};

export const setMode = (payload) => ({
  type: 'SET_MODE',
  payload,
});

export const addSlides = (payload) => ({
  type: 'ADD_SLIDES',
  payload,
});

export const updateCurrentIndex = (payload) => ({
  type: 'UPDATE_CURRENT_INDEX',
  payload,
});

export const updateCurrentFragmentSteps = (payload) => ({
  type: 'UPDATE_CURRENT_FRAGMENT_STEPS',
  payload,
});

export const resetState = () => ({
  type: 'RESET_STATE',
});

export const useSlides = () => useContext(SlidesContext);

export const SlidesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <SlidesContext.Provider value={{ state, dispatch }}>{children}</SlidesContext.Provider>;
};
