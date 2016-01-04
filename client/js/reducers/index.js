import { combineReducers } from 'redux'
import courses from './courses'
import user from './user'

const rootReducer = combineReducers({
    user,
    courses
});

export default rootReducer
