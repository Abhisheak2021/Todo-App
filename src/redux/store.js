import { configureStore } from "@reduxjs/toolkit";
import {reducer} from "./reducer";

const store=configureStore({
    reducer:reducer,
});

export default store;

// Now connecting this store to react app-