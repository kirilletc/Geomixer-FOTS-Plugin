import {
    CHANGE_HOURS_STEP,
    CHANGE_NAME,
    ADD_POINT,
    EDIT_POINT,
    REPLACE_POINTS,
    COUNT_WIND,
    REVERSE_CALC,
    COUNT_CURRENTS,
    PERMANENT_SOURCE,
    IS_OIL,
    BUILD_IMAGES
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

export function editPoint(id, coordType, value) {
    return {
        type: EDIT_POINT,
        payload: { id, coordType, value }
    }
}

export function countWind(value) {
    return {
        type: COUNT_WIND,
        payload: { value }
    }
}

export function reverseCalc(value) {
    return {
        type: REVERSE_CALC,
        payload: { value }
    }
}

export function countCurrents(value) {
    return {
        type: COUNT_CURRENTS,
        payload: { value }
    }
}

export function permanentSource(value) {
    return {
        type: PERMANENT_SOURCE,
        payload: { value }
    }
}

export function isOil(value) {
    return {
        type: IS_OIL,
        payload: { value }
    }
}

export function buildImages(value) {
    return {
        type: BUILD_IMAGES,
        payload: { value }
    }
}
