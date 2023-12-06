import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesReducers";
import userReducer from "./userReducer";

export default configureStore({
    reducer: {
        articlesState: articlesReducer,
        userState: userReducer
    }
});