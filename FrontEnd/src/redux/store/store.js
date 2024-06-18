import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "../slice/loginSlice";
import cartSlice from "../slice/cartSlice";
import searchSlice from "../slice/searchSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedLoginReducer = persistReducer(persistConfig, loginSlice.reducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    cart: cartSlice,
    search: searchSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);

