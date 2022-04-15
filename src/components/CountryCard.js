import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/countriesList.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function CountryCard({ country, confirmed, backgroudColorForCountry }) {
  return (
    <Link to={`/${country}`} style={{ backgroundColor: backgroudColorForCountry }}>
      <div className="country-conainer">
        <BsFillArrowRightSquareFill className="arrowbtn" />
        <div className="info">
          <p>
            <b>{country}</b>
          </p>
          <p>
            Total confirmed cases
            {' '}
            <br />
            {confirmed}
          </p>
        </div>
      </div>
    </Link>
  );
}

CountryCard.defaultProps = {
  country: '',
  confirmed: '',
  backgroudColorForCountry: '',
};

CountryCard.propTypes = {
  country: PropTypes.string,
  confirmed: PropTypes.string,
  backgroudColorForCountry: PropTypes.string,
};

export default CountryCard;
