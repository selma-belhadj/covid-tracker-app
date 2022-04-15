import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import '../styles/CountryFlag.css';
import tickTack from './updateTime';

const CountryFlag = (props) => {
  const {
    flag, title,
  } = props;
  const [timer, setTimer] = useState('');
  const interval = setInterval(() => {
    setTimer(tickTack);
  }, 1000);
  useEffect(() => () => {
    clearInterval(interval);
  }, []);
  return (
    <div className="pageHeader">
      <div className="item">
        <img src={flag} alt="Flag" />
        <div className="data-sets">
          <h2 className="country_name">{title}</h2>
          <p>{timer}</p>
        </div>
      </div>
    </div>
  );
};
export default CountryFlag;

CountryFlag.propTypes = {
  title: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};
