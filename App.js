import React from "react";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {configureStore} from "@reduxjs/toolkit";
import AppStack from "./src/navigation";
import persistedReducer from './src/state/Reducers'

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const persistor = persistStore(store)

persistor.purge()

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppStack/>
        </PersistGate>
      </Provider>
  );
}
