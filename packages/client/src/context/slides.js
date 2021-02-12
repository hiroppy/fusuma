import React, { createContext, useContext, useReducer } from 'react';
import { getModeFromUrl } from '../utils/getModeFromUrl';
import { getCurrentIndexFromUrl } from '../utils/getCurrentIndexFromUrl';
import { getSlideIndex } from '../utils/getSlideIndex';

const initialState = {
  mode: getModeFromUrl(),
  currentIndex: getCurrentIndexFromUrl(),
  slides: [],
  contentsList: [],
};

const SlidesContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'ADD_SLIDES':
      return { ...state, ...action.payload };
    case 'UPDATE_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: getSlideIndex(action.payload, state.slides.length - 1, state.currentIndex),
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

export const useSlides = () => useContext(SlidesContext);

export const SlidesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <SlidesContext.Provider value={{ state, dispatch }}>{children}</SlidesContext.Provider>;
};
