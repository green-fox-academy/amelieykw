import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from '../mainHelper/ActionTypes';
import { SEND_FORM } from './ActionTypes';
import * as Status from '../status';

export default (state = { status: Status.LOADING }, action) => {
  switch (action.type) {
    case FETCH_STARTED: {
      return {status: Status.LOADING};
    }
    case FETCH_FAILURE: {
      return {status: Status.FAILURE};
    }
    case FETCH_SUCCESS: {
      return {...state, ...action.result, status: Status.SUCCESS};
    }
    case SEND_FORM: {    
        console.log(action.result);  
        return {...state, status: Status.SUCCESS};
    }
    default: {
      return state;
    }
  }
}
