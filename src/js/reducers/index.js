import {combineReducers} from 'redux';
import stepReducer from './stepReducer';
import nameReducer from './nameReducer'

export default combineReducers({
    step: stepReducer,
    name: nameReducer
});
