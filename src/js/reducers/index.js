import { combineReducers } from 'redux';
import stepReducer from './stepReducer';
import nameReducer from './nameReducer';
import pointsReducer from './pointsReducer';

export default combineReducers({
    step: stepReducer,
    name: nameReducer,
    points: pointsReducer
});
