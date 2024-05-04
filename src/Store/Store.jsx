import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./Reducers/CardSlice";
import RoleSlice from "./Reducers/RoleSlice";

export const store = configureStore({
  reducer: {
    cardS: CardSlice,
    role: RoleSlice,
  },
});
