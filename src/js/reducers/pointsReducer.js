import { ADD_POINT, REPLACE_POINTS } from '../constants';

const pointsReducer = (points = [], action) => {
    const {type, payload} = action;

    switch (action.type) {
        case ADD_POINT:
            points = [...points].concat(payload.point);
            break;
        case REPLACE_POINTS:
            points = payload.points;
            break;
        default:
    }

    return points;
}

export default pointsReducer;
