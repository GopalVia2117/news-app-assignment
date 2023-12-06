import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    fetching: false,
    articles: [],
    error: ''
}

export const fetchArticles =  createAsyncThunk('articles/fetchArticles', () => {
    return axios.get("https://newsapi.org/v2/top-headlines?country=in", {
        headers: {
            "x-api-key": process.env.NEXT_PUBLIC_NEWS_X_API_KEY
        }
    }).then(response => {
        console.log(response.data); 
        return response.data;
    });
});

export const articleSlice = createSlice({
    name: 'articles',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchArticles.pending, state => {
            state.fetching = true
        })
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.fetching = false
            state.articles = action.payload
            state.error = ''
        })

        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.fetching = false
            state.articles = []
            state.error = action.error.message
        })
    }
});


// export const {fetchArticlesRequest, fetchArticlesSuccess, fetchArticlesError} = articleSlice.actions;
export default articleSlice.reducer;
