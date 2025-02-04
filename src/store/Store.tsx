import { configureStore, combineSlices } from "@reduxjs/toolkit";
import recipesSlice from "./RecipesSlice";

const Store = configureStore({
    reducer: combineSlices(
        recipesSlice,
    ),
});

export type storeType = ReturnType<typeof Store.getState>
export type appDispatch = typeof Store.dispatch;
export default Store;
