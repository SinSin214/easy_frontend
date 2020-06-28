import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        storeListTask: (state, action) => {
            state = action.payload;
        },

    }
})

const { actions, reducer } = taskSlice;
export const { storeListTask } = actions;
export default reducer;