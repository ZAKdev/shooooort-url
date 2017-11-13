export default (state = {
  shortens: [],
  error: false,
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
              visits: action.visits,
              lastVisited: action.lastVisited,
            })
          return short
        })
      })

    case 'SAVE_IN_LOCALSTORAGE':
      window.localStorage.setItem('appState', JSON.stringify(state))
      return state;

    case 'DATA_FROM_LOCALSTORAGE':
      const localStorageData = JSON.parse(window.localStorage.getItem('appState') || "[]")
      return Object.assign({}, state, localStorageData)

    case 'CLEAR_HISTORY':
      window.localStorage.removeItem('appState')
      return Object.assign({}, state, {
        shortens: []
      })

    case 'SHOW_ERROR':
      return Object.assign({}, state, {
        error: true
      })

    default:
      return state;
  }
};