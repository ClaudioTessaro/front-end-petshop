import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "petshop",
      storage,
      whitelist: ["auth", "cliente"],
    },
    reducers
  );

  return persistedReducer;
};
