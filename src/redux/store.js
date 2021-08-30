import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authReducer from './auth/auth-reducer';
import { transactionsReducer } from './transactions';
import storage from 'redux-persist/lib/storage';
import { modalLogout } from './wallet/wallet-reduser';
// import isLoading from './isLoading/isLoading-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(contactsPersistConfig, phonebookReducer),
// });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user', 'error'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  transactions: transactionsReducer,
  logoutModalAction: modalLogout,
  // isLoading,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
