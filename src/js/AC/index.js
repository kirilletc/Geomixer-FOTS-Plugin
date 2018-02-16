import {
    CHANGE_HOURS_STEP,
    CHANGE_NAME,
    ADD_POINT,
    EDIT_POINT,
    REPLACE_POINTS
} from '../constants';


export function changeHoursStep(step) {
    return {
        type: CHANGE_HOURS_STEP,
        payload: { step }
    }
}

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        payload: { name }
    }
}

export function addPoint(point) {
    return {
        type: ADD_POINT,
        payload: { point }
    }
}

export function replacePoints(points) {
    return {
        type: REPLACE_POINTS,
        payload: {points}
    }
}

export function editPoint(id, type) {
    return {
        type: EDIT_POINT,
        payload: { id, type }
    }
}
