import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const WorldMap = require('../images/world-map.png');

const Header = ({
  title, total,
}) => (
  <div className="page-header">
    <div className="header-image">
      <img src={WorldMap} alt="World Map" width="70%" height="100%" />

    </div>
    <div className="header-body">
      <h2>{title}</h2>
      <p>
        <b>
          {total}
          {' '}
          Cases
        </b>
      </p>
    </div>
  </div>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
