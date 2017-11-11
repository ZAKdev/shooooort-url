import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './components/header';

const AppContainer = props => (
  <div className="AppContainer">
    <Header
      title={props.app.appName}
      content={props.app.appContent}
    />
    {props.children}
  </div>
);

AppContainer.propTypes = {
  appName: PropTypes.string.isRequired,
  appContent: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  app: state.AppReducer,
});

export default connect(mapStateToProps)(AppContainer);
