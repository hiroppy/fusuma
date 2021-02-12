import React, { createContext, useContext, useReducer } from 'react';
import { getSlideIndex } from '../utils/getSlideIndex';

const initialState = {
  currentIndex: 0,
};

const PresenterContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: getSlideIndex(
          action.payload.index,
          action.payload.slideLength - 1,
          state.currentIndex
        ),
      };
    default:
      return state;
  }
};

export const updateCurrentIndex = (payload) => ({
  type: 'UPDATE_CURRENT_INDEX',
  payload,
});

export const usePresenter = () => useContext(PresenterContext);

export const PresenterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PresenterContext.Provider value={{ state, dispatch }}>{children}</PresenterContext.Provider>
  );
};
