import {SET_PERIOD} from './actionTypes';

export const setPeriod = (startDate, endDate) => ({
    type: SET_PERIOD,
    payload: {
        startDate,
        endDate
    }
})