import axios from 'axios';
import moment from 'moment'

export const submitShorten = url => dispatch => {
  return axios.post('http://localhost:2000/api/get-shorten', {
    url
  })
    .then(res => 
      dispatch({
        type: 'RECEIVED_SHORTCODE',
        url,
        shortcode: res.data.shortcode,
        visits: 0,
        lastVisited: "none"
      })
    )
}

export const onClickUrl = ({ shortcode, visits, lastVisited }) => dispatch => {
  dispatch({
    type: "UPDATE_URL_VISITS",
    shortcode,
    visits: visits+1,
    lastVisited: moment(moment().format()).fromNow()
  })
}