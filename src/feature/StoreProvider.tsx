'use client'

import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

interface props {
  children: React.ReactNode
}

const StoreProvider = ({children} : props ) => {
  return (
    <Provider store={ store}>
      <PersistGate loading={'loading...'} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;