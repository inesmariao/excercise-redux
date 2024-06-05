import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, userReducer } from './slice';

// Creación del store utilizando Redux Toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  }
});

export default store;