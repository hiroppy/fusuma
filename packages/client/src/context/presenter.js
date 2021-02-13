import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  currentIndex: 0,
};

const PresenterContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const usePresenter = () => useContext(PresenterContext);

export const PresenterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PresenterContext.Provider value={{ state, dispatch }}>{children}</PresenterContext.Provider>
  );
};
