import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import tickTack from './updateTime';

const WorldMap = require('../images/world-map.png');

const Header = ({
  title, total,
}) => {
  const [timer, setTimer] = useState('');
  const interval = setInterval(() => {
    setTimer(tickTack);
  }, 1000);
  useEffect(() => () => {
    clearInterval(interval);
  }, []);
  return (
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
            Recorded Cases
          </b>
        </p>
        <p>
          <b>
            {timer}
          </b>
        </p>

      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
