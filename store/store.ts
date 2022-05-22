import {
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./reducers/reducer";

export const store = configureStore({
  reducer
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);