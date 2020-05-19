import { combineReducers } from 'redux'
import taskSlice from './task/task'

const myReducer = combineReducers({
    task: taskSlice
});
export default myReducer;