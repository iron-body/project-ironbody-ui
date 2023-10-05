import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';
import { persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { exercisesReducer } from './exercises/exercises.Slice';
import { headerReducer } from './headerSlice';
import { productsReducer } from './products/slice';
import { paramsReducer } from './params/paramsSlice';
import { profileReducer } from './profile/profileSlice';
// import dateReducer from './selectedDate/dateReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },

    // serializableCheck: false,
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const localStorageAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: localStorageAuthReducer,
    header: headerReducer,
    products: productsReducer,
    exercises: exercisesReducer,
    params: paramsReducer,
    profile: profileReducer,
    // date: dateReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
