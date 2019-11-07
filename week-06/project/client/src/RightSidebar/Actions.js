import { fetchStarted, fetchFailure } from '../mainHelper/Actions';
import { SEND_FORM } from './ActionTypes.js';
import { fetchAllPosts } from '../MainPostList/Actions';

export const sendForm = (result) => ({
    type: SEND_FORM,
    result
})

export const sendFormData = (title, url) => {
    return (dispatch) => {
        let addNewPostUrl = `/posts`;

        dispatch(fetchStarted())

        return fetch(addNewPostUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "title": title, "url": url })
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                dispatch(sendForm(responseJson));
                dispatch(fetchAllPosts());
            }).catch((error) => {
                dispatch(fetchFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchFailure(error));
        })
    };
}