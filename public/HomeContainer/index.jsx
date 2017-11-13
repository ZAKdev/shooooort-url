import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './HomeActions';
import ShortenForm from './components/shortenForm';
import ShortenListing from './components/shortenListing';

class HomeContainer extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      submitShorten: PropTypes.func.isRequired,
      onClickUrl: PropTypes.func.isRequired,
      onClickClearHistory: PropTypes.func.isRequired,
    }),
    home: PropTypes.shape({
      shortens: PropTypes.array.isRequired,
      error: PropTypes.bool.isRequired,
    })
  }

  render() {
    return(
      <div className="HomeContainer">
        <ShortenForm
          submitShorten={this.props.actions.submitShorten}
        />
        {
          this.props.home.shortens.length > 0 &&
            <ShortenListing
              shortens={this.props.home.shortens}
              onClickUrlActions={this.props.actions.onClickUrl}
              onClickClearHistory={this.props.actions.onClickClearHistory}
              error={this.props.home.error}
            />
        }        
      </div>
    )
  }

  componentDidMount() {
    return this.props.actions.getDataFromLocalStorage()
  }
}

const mapStateToProps = state => ({
  home: state.HomeReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);