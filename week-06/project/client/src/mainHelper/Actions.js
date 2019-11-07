import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './ActionTypes.js';

export const fetchStarted = () => ({
    type: FETCH_STARTED
});

export const fetchSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
})

export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    error
})
