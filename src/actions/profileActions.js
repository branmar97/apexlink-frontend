import { root } from './index';

export const getProfile = (id) => {
    return dispatch => {
      fetch(`${root}/profiles/${id}`)
      .then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'GET_PROFILE', profile: responseJSON })
      })
    }
}