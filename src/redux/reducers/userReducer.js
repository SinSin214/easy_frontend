import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('token'));

const initialState = {
    isLogged: data ? true : false,
    username: data ? data.username : ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        isLogged: (state, action) => {
            state.isLogged = true;
            state.username = action.payload.username;
        },

    }
})

const { actions, reducer } = userSlice;
export const { isLogged } = actions;
export default reducer;