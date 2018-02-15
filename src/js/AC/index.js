import { CHANGE_HOURS_STEP, CHANGE_NAME } from '../constants';


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
