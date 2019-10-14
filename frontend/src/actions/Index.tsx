import { SET_PERIOD, RECEIVED_HOTELS, REQUEST_HOTELS } from './actionTypes';

export const setPeriod = (startDate, endDate) => ({
  type: SET_PERIOD,
  payload: {
    startDate,
    endDate
  }
})

function requestHotels() {
  return {
    type: REQUEST_HOTELS
  }
}

function receivedHotels(hotelsList) {
  return {
    type: RECEIVED_HOTELS,
    payload: hotelsList
  }
}

export function fetchHotels() {
  return function (dispatch) {
    dispatch(requestHotels());
    return fetch(`https://online-booking.free.beeceptor.com/hotels`)
      .then(
        response => response.json(),
        error => console.error('ERROR: ' + error)
      )
      .then(
        hotelsList => dispatch(receivedHotels(hotelsList))
      );
  }
}