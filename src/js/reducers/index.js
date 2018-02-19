import { combineReducers } from 'redux';
import stepReducer from './stepReducer';
import nameReducer from './nameReducer';
import windReducer from './windReducer';
import pointsReducer from './pointsReducer';
import reverseCalcReducer from './reverseCalcReducer';
import currentsReducer from './currentsReducer';

export default combineReducers({
    step: stepReducer,
    name: nameReducer,
    points: pointsReducer,
    countWind: windReducer,
    reverseCalc: reverseCalcReducer,
    countCurrents: currentsReducer
});
