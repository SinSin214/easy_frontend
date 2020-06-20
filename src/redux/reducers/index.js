import { combineReducers } from 'redux'
import userReducer from './userReducer'
import processReducer from './processReducer';

const rootReducer = combineReducers({
    user: userReducer,
    process: processReducer
})

export default rootReducer
