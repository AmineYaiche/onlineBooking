import { combineReducers } from 'redux';
import {
  setPeriod,
  fetchingHotels,
  hotelSelected,
  wizardStep,
  userInfo,
  validatedBooking,
  errorBookingForm,
} from './hotels';

export default combineReducers({
  setPeriod,
  fetchingHotels,
  hotelSelected,
  wizardStep,
  userInfo,
  validatedBooking,
  errorBookingForm
})

