import { combineReducers } from 'redux';
import {
  setPeriod,
  fetchingHotels,
  hotelSelected,
  wizardStep,
  userInfo
} from './hotels';

export default combineReducers({
  setPeriod,
  fetchingHotels,
  hotelSelected,
  wizardStep,
  userInfo
})

