import { combineReducers } from 'redux';
import { registrationReducer, projectReducer, taskReducer } from './reducer'

const rootReducer = combineReducers({
    users : registrationReducer,
    project: projectReducer,
    task: taskReducer,
})

export default rootReducer;