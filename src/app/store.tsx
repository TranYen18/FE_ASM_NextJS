
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../features/product/product.slice";
import categoryReducer from "../features/category/category.slice";
export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;