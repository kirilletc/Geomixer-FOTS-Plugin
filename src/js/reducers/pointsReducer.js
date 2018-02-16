import { ADD_POINT, EDIT_POINT, REPLACE_POINTS } from '../constants';

const pointsReducer = (points = [], action) => {
    const {type, payload} = action;

    switch (action.type) {
        case ADD_POINT:
            points = [...points].concat(payload.point);
            break;
        case EDIT_POINT:
            const {id, type} = payload;
            const editingPoint = points.find(point => point.id === id);

            points = [
                ...points.slice(0, id),
                editingPoint,
                ...points.slice(id + 1)
            ]
            break;
        case REPLACE_POINTS:
            points = payload.points;
            break;
        default:
    }

    return points;
}

export default pointsReducer;
