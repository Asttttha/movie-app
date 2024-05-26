import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL;
console.log(process.env);

//action
export const fetchMovies= createAsyncThunk('fetchData', async()=>{
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
})

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        isLoading: false,
        data: [],
        isError: false,
        favorites: []

    },
    reducers:{
        toggleFavorite: (state, action)=>{
            const movieId = action.payload
            if (state.favorites.includes(movieId)){
                state.favorites = state.favorites.filter(id => id !== movieId);
            }
            else {
                state.favorites.push(movieId);
            }
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchMovies.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchMovies.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        .addCase(fetchMovies.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        });
    }
})

export const { toggleFavorite } = movieSlice.actions;
export default movieSlice.reducer