import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Header from './components/header';

const AppContainer = props => (
  <div className="AppContainer">
    <Header
      title="Shooooort"
      content="The link shortener with a long name"
    />
    {props.children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  common: state.CommonReducer,
});

export default connect(mapStateToProps)(AppContainer);
