import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTask(state, action) {
            const { id, name, describe, importance, datetime } = action.payload
            state.push({ id, name, describe, importance, datetime })
        }
    }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer;