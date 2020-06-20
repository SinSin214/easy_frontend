import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pending: false,
    error: false
}

const processSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        isPending(state) {
            state.pending = true;
            state.error = false;
        },
        isError(state, action) {
            state.error = true;
            state.pending = false
        }
    }
})

const { actions, reducer } = processSlice;
export const { isPending, isError } = actions;
export default reducer;