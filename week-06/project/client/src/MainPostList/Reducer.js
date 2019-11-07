import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from '../mainHelper/ActionTypes';
import { FETCH_UPDATE } from './ActionTypes';
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
    case FETCH_UPDATE: {
      let { status, ...oldState } = state;
      oldState[action.update[0].id - 1] = action.update[0];

      return { ...oldState, status: Status.SUCCESS };
    }
    default: {
      return state;
    }
  }
}
