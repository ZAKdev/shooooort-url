import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ShortenForm from './components/shortenForm'

class HomeContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="HomeContainer">
        <ShortenForm/>
      </div>
    ) 
  }
}

export default HomeContainer