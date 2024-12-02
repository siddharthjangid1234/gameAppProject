import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import gameReducer from '../store/Slice/gameSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Combine reducers
const rootReducer = combineReducers({
  game: gameReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  blacklist: ['loading'],
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware setup function
const setupMiddleware = () => {
  const middleware = [thunk];
  return middleware;
};

// Create Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => setupMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// Create persistor object
export const persistor = persistStore(store);
