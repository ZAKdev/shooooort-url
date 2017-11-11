import axios from 'axios'

export const submitShorten = url => dispatch => {
  return axios.post('http://localhost:2000/api/get-shorten', {
    url
  })
    .then(res => 
      dispatch({
        type: 'RECEIVED_SHORTCODE',
        shortcode: res.data.shortcode,
        url
      })
    )
}