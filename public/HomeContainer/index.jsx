import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './HomeActions';
import ShortenForm from './components/shortenForm';
import ShortenListing from './components/shortenListing';

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="HomeContainer">
        <ShortenForm
          submitShorten={this.props.actions.submitShorten}
        />
        <ShortenListing
          shortens={this.props.home.shortens}
          onClickUrlActions={this.props.actions.onClickUrl}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  home: state.HomeReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);