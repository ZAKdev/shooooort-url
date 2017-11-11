import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header className="Header">
    <h1 className="Header-logo">{props.title}</h1>
    <p>{props.content}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Header;