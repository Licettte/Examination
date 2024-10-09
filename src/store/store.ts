import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import { questionsReducer } from './reducers/questionsSlice';
import { timerReducer } from './reducers/timerSlice';

const rememberedReducers = [
  'questionsReducer',
  'timerReducer',
];

const rootReducer = combineReducers({
  questionsReducer,timerReducer
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(rememberEnhancer(window.localStorage, rememberedReducers)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
