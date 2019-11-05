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

export const fetchAllPosts = () => {
  return (dispatch) => {
    let allPostsUrl = `http://localhost:3001/posts`;

    dispatch(fetchStarted())

    return fetch(allPostsUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
        dispatch(fetchSuccess(responseJson.posts));
      }).catch((error) => {
        dispatch(fetchFailure(error));
      });
    }).catch((error) => {
      dispatch(fetchFailure(error));
    })
  };
}

