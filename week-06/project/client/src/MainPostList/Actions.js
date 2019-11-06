import { FETCH_STARTED, FETCH_SUCCESS, FETCH_UPDATE, FETCH_FAILURE } from './ActionTypes.js';

export const fetchStarted = () => ({
  type: FETCH_STARTED
});

export const fetchSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchUpdate = (update) => ({
  type: FETCH_UPDATE,
  update
})

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchAllPosts = () => {
  return (dispatch) => {
    let allPostsUrl = `/posts`;

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

export const fetchVote = (id, type) => {
  return (dispatch) => {
    let upVoteUrl = `http://localhost:3001/posts/${id}/upvote`;
    let downVoteUrl = `http://localhost:3001/posts/${id}/downvote`;

    let url = (type === "UP") ? upVoteUrl : downVoteUrl;

    return fetch(url, {
      method: 'PUT'
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      response.json().then((responseJson) => {
        dispatch(fetchUpdate(responseJson));
      }).catch((error) => {
        dispatch(fetchFailure(error));
      });
    }).catch((error) => {
      dispatch(fetchFailure(error));
    })
  };
}