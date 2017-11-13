# Shooooort URL

Expected node version is 6.0 or above

## Installation & Run
- Take clone of project
- `npm install webpack-dev-server -g`
- `npm install`
- `npm start`
- visit `http://localhost:1500`

## Server
- `npm run server` which will be running on `http://localhost:2000`

## Tools Used
- React
- Redux
- Redux Thunk
- Webpack
- Express
- Stylus - CSS

## Architecture
- Contain class and functional react components
- `public/AppContainer` is the wrapper of entire application
- Each view has container component (defined in - `public`) which contains all logics of child components
- Every container components also contain some child components which is defined in same directory
- Entire application states has been managed by Redux, defined reducers in container component directory like `public/AnyContainer/AnyReducer.js`
- Actions which performed by each view/container it defined in each container like `public/AnyContainer/AnyActions.js`
- Each child/funcitonal components contain its own styling

## Logics
- Express application contain just one route `http://localhost:2000/api/get-shorten` which will make post request with url on `https://impraise-shorty.herokuapp.com/shorten`
- Making api request when user is submittung the form after response updating `url, shortcode, visits, lastVisited` in reducer and also save entire state of reducer in localStorage. Entire logic is defined in `HomeActions.js > submitShorten()` & `HomeReducer.js`
- On clicking urls executing an action `HomeActions.js > onClickUrl()` which will increment `visits` and set `lastVisited` using `moment` and again save entire state of reducer in localStorage
- After `HomeContainer` mount getting data from localStorage and update `HomeReducer`, defined in `HomeActions.js > getDataFromLocalStorage`
- On clicking clear history removing all data from localStorage and making `HomeReducer` empty
