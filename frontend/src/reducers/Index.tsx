import { combineReducers } from 'redux';
import {setPeriod, fetchingHotels} from './hotels';

export default combineReducers({
  setPeriod,
  fetchingHotels
})

