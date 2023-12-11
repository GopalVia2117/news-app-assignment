import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites : null
}


export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = action.payload
        }
    }
    
});


export const {setFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;
