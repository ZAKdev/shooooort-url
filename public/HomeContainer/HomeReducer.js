export default (state = {
  shortens: []
}, action) => {
  switch (action.type) {
    case 'RECEIVED_SHORTCODE':
      return {
        ...state,
        shortens: [{
          url: action.url,
          shortcode: action.shortcode
        }]
      }
    default:
      return state;
  }
};