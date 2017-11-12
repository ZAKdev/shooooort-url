export default (state = {
  shortens: []
}, action) => {
  switch (action.type) {
    case 'RECEIVED_SHORTCODE':
      let { url, shortcode, visits, lastVisited } = action
      return {
        ...state,
        shortens: [...state.shortens, {
          url,
          shortcode,
          visits,
          lastVisited,
        }]
      }
    case 'UPDATE_URL_VISITS':
      return Object.assign({}, state, {
        shortens: state.shortens.map(short => {
          if(short.shortcode === action.shortcode)
            return Object.assign({}, short, {
              ...action
            })
          return short
        })
      })
    default:
      return state;
  }
};